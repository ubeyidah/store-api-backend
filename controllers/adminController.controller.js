import Users from "../models/users.model.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    if (!users)
      return res.status(404).json({ msg: "No users found", sucess: false });
    res.status(200).json({ sucess: true, data: users });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

export { getAllUsers };
