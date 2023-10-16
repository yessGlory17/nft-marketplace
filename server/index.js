const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017");

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   UserModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       if (user.password === password) {
//         res.json("Success");
//       } else {
//         res.json("Incorrect");
//       }
//     } else {
//       res.json("NO RECORD EXISTED");
//     }
//   });
// });
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email, password: password })
    .then((user) => {
      if (user) {
        res.json({ success: true, name: user.name }); // Send the user's name
      } else {
        res.json({ success: false, message: "Incorrect email or password" });
      }
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: error.message });
    });
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Running");
});
