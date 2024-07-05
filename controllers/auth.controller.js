import Users from "../models/users.model.js";
import bcrypt from "bcrypt";
import { genAndSetToken } from "../utils/index.js";

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ msg: "all fileds are required", secess: false });
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
const login = async (req, res) => {};
const logout = async (req, res) => {};

export { signup, login, logout };
