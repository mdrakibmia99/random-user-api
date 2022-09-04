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

// Update an user data
module.exports.updateAUser = (req, res) => {
    const bufferedData = fs.readFileSync(__dirname + "/../public/user.json");
    const parsedUserData = JSON.parse(bufferedData);
    const { id } = req.params;
    const body = req.body;
    const targetData = parsedUserData.find(data => data.id === Number(id));
    const updatedData = {
        id: targetData.id,
        gender: body.gender || targetData.gender,
        name: body.name || targetData.name,
        contact: body.contact || targetData.contact,
        address: body.address || targetData.address,
        photoURL: body.photoURL || targetData.photoURL,
    };
    const newUserData = parsedUserData.filter(data => data.id !== Number(id));
    newUserData.push(updatedData);
    const stringifiedUserData = JSON.stringify(newUserData);

    fs.writeFile(__dirname + "/../public/user.json", stringifiedUserData, error => {
        if (!error) {
            res.status(202).json({
                success: true,
                message: "successfully updating user data",
                data: updatedData
            })
        } else {
            console.log("Failed to update user data");
        }
    })
}

// Update multiple user data
module.exports.bulkUpdateUser = (req, res) => {
    const { id } = req.query;
    const newData = req.body;
    const ids = id.split("-");


    const bufferedData = fs.readFileSync(__dirname + "/../public/user.json");
    const parsedUserData = JSON.parse(bufferedData);
    let oldData = parsedUserData.filter(user => !ids.includes(user.id.toString()));

    // oldData.push(newData);
    newData.forEach(data => oldData.push(data));

    const stringifiedUserData = JSON.stringify(oldData);
    fs.writeFile(__dirname + "/../public/user.json", stringifiedUserData, error => {
        if (!error) {
            res.status(200).json({
                success: true,
                message: "successfully updating bulk-user data",
                data: oldData
            });
        } else {
            console.log("Failed to delete user data");
        }
    })
}

// Delete an user data
module.exports.deleteAUser = (req, res) => {
    const bufferedData = fs.readFileSync(__dirname + "/../public/user.json");
    const parsedUserData = JSON.parse(bufferedData);
    const { id } = req.params;
    const newUserData = parsedUserData.filter(data => data.id !== Number(id));

    const stringifiedUserData = JSON.stringify(newUserData);
    fs.writeFile(__dirname + "/../public/user.json", stringifiedUserData, error => {
        if (!error) {
            res.status(202).json({
                success: true,
                message: "successfully deleting user data",
                data: newUserData
            })
        } else {
            console.log("Failed to delete user data");
        }
    })
}