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

app.get("/signin", (req, res) => {
const {name, email, password} = req.body;
bcrypt.hash(password, 10)
.then(hash => {
    UserModel.create({name, email, password: hash})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("server is running")
})