const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("hello world");
})

const port = process.env.port || 4000;

app.listen(port, () => {
    console.log("server is running");
})