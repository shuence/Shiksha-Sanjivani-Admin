const UserModel = require("../models/UserModel");
require('dotenv').config()
const { ACCESS_TOKEN_SECRET } = process.env;
const jwt = require('jsonwebtoken')

async function signup(req, res) {
  try {
    let User = new UserModel(req.body);
    await User.save();
    res.json({
      data: User,
      rcode: 200,
    });
  } catch (err) {
    console.log(err);
    res.json({
      data: err,
      rcode: -9,
    });
  }
}

async function login(req,res) {
  const { Email, Password } = req.body;
  let User = await UserModel.findOne({ Email: Email });

  if (User && User.Password == Password) {
    const accesstoken = jwt.sign(
      { Email: User.Email, Password: User.Password },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      data: User,
      msg: "login done",
      token: accesstoken,
      rcode: 200,
    });
  } else {
    res.json({ data: req.body, msg: "Invalid credential", rcode: -9 });
  }
}

module.exports = {
  signup,
  login,
};