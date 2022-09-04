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
