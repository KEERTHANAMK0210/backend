const mongoose=require("mongoose")
const project=require("../Model/SignSchema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const login = async (req, res) => {
    const { Email, Password } = req.body;
  
    const tokengenerate = (id) => {
      return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
    };
  
    if (!Email || !Password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }
  
    if (Password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }
  
    const details = await project.findOne({ Email });
  
    if (details && bcrypt.compare(Password, details.Password)) {
      res.json({ Message: "Login success", Token: tokengenerate(details._id) });
    } else {
      res.json("Login failed");
    }
  };
  
  module.exports = login;
  
