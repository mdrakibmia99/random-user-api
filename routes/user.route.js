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
router.get("/all", getAllUsers);
router.post("/save", saveAUser);
router.patch("/update/:id", updateAUser);


module.exports = router;