import jwt from "jsonwebtoken";
import Users from "../models/users.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.storeJwt;
    if (!token)
      return res.status(401).json({ msg: "Unauthorized!", sucess: false });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ msg: "Unauthorized!", sucess: false });
    const user = await Users.findById(decoded.id);
    if (!user)
      return res.status(404).json({ msg: "user not found!", sucess: false });
    if (user.isVerified) {
      req.user = user;
      next();
    } else {
      return res.status(401).json({
        msg: "You are not verified to access this page. please contact admin to verifiey.",
        sucess: false,
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong.", sucess: false });
  }
};

export default protectRoute;
