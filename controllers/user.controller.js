// external imports
const fs = require("fs");
const randomID = require("../utils/randomID");

// internal import
const users = require(__dirname + "/../public/user.json");

// Get a random user data
module.exports.getARandomUser = (req, res) => {
    const rand = randomID(users.length);

    res.status(200).json({
        success: true,
        message: "successfully fetching a random user data",
        data: users.find(user => user.id === rand)
    });
}

// Get all user data
module.exports.getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "successfully fetching user data",
        data: users
    });
};

// Insert a new user data
module.exports.saveAUser = (req, res) => {
    const bufferedData = fs.readFileSync(__dirname + "/../public/user.json");
    const parsedUserData = JSON.parse(bufferedData);
    const newUserData = req.body;

    parsedUserData.push(newUserData);
    const stringifiedUserData = JSON.stringify(parsedUserData);
    fs.writeFile(__dirname + "/../public/user.json", stringifiedUserData, error => {
        if (!error) {
            res.status(201).json({
                success: true,
                message: "successfully inserting new user data",
                data: newUserData
            })
        } else {
            console.log("Failed to insert new user data");
        }
    })
}
