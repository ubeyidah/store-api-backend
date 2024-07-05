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

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findOneAndDelete({ _id: id });
    if (!deletedUser)
      return res.status(404).json({ msg: "User not found!", sucess: false });
    res.status(200).json({ msg: "User successfully deleted!", sucess: true });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

const verifyUser = async (req, res) => {
  try {
    // verify users if they verified it will fillips or unverify them
    const { id } = req.params;
    const matchUser = await Users.findById(id);
    if (!matchUser)
      return res.status(404).json({ msg: "User not found", sucess: false });
    await Users.findOneAndUpdate(
      { _id: id },
      { isVerified: !matchUser.isVerified }
    );
    res
      .status(200)
      .json({ msg: `successfully verified or unverified`, sucess: true });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

export { getAllUsers, deleteUser, verifyUser };
