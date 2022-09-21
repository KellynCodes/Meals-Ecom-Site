const Router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
Router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    country: req.body.country,
    phone: req.body.phone,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
Router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");

    const hashedPassword = CryptoJs.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );

    const OriginalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong Crendentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = Router;
