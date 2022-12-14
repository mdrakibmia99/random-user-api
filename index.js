/**
 * Title: Driver code
 * Description: Consume all operations & operands
 * Author: Md Rakib Mia
 */

// external imports
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.route");

// internal imports
const app = express();
const port = process.env.PORT || 5000;

// connect with middleware
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

app.use("/user", userRouter);

// enable requests
app.get("/", (req, res) => {
    res.send('ACC Assignment-1 -Md Rakib Mia');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});