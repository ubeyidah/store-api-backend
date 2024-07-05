import Users from "../models/users.model.js";
import bcrypt from "bcrypt";
import { genAndSetToken } from "../utils/index.js";

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({ msg: "fill out the filed", secess: false });
    }
    const isUserExist = await Users.findOne({ email });
    if (isUserExist) {
      return res
        .status(400)
        .json({ msg: "this email adress already exits.", secess: false });
    }

    // hash password
    const hashSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, hashSalt);
    const newUser = await Users({
      userName,
      email,
      password: hashedPassword,
    }).save();
    genAndSetToken(newUser._id, res);
    res.status(201).json({
      sucess: true,
      data: {
        id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ msg: "fill out the filed", secess: false });
    const user = await Users.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ msg: "no email adress found", secess: false });
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword)
      return res.status(400).json({ msg: "password mismatch", secess: false });
    genAndSetToken(user._id, res);
    res.status(200).json({
      sucess: true,
      data: {
        id: user._id,
        userName: user.userName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};
const logout = (req, res) => {
  try {
    res.clearCookie("storeJwt");
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

export { signup, login, logout };
