const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
    res.send("server in runnning")
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("mongodb connected")
})
.catch(err => console.log(err))

const PORT = process.env.PORT || 3000;
 
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});