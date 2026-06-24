const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./Model")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("database connected")
}).catch(err => console.log(err))


app.get("/", (req, res) => {
    res.send("working")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running")
})