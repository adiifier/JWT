const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");



mongoose.connect(
  "mongodb+srv://adityayadav2510:TuKyKl2VLcHZdvcg@cluster0.mnbq6.mongodb.net/newUsers"
);

const User = mongoose.model("Users", {
  username: String,
  password: String,
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const checkUser = await User.findOne({ username: username });

  if (checkUser) {
    res.status(404).json({
      message: "Username Already Used",
    });
  } else {
    const user = new User({
      username: username,
      password: password,
    });
    user.save();
    res.status(200).json({
      message: "Signed Up Succesfully",
    });
  }
});

app.listen(4000);
