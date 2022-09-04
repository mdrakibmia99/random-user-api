// external import
const express = require("express");

// internal import
const {
    getARandomUser,
    getAllUsers,
    saveAUser,
    updateAUser,
    bulkUpdateUser,
    deleteAUser
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/random", getARandomUser);


module.exports = router;