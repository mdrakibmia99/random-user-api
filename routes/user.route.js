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
router.patch("/bulk-update", bulkUpdateUser);
router.delete("/delete/:id", deleteAUser);

module.exports = router;