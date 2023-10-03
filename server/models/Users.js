const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;

// axios
//   .post("http://localhost:3001/register", { name, email, password })
//   .then((result) => {
//     console.log(result);
//     nav("/login");
//   })
//   .catch((err) => console.log(err));
