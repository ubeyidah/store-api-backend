const signup = async (req, res) => {
  try {
    const { userName, email, password, isAdmin } = req.body;
    // valid inputs
    // check if it exit in db
    // hash password
    // save user
    // set token and save it in cookie
    // response new user
  } catch (error) {
    res.status(500).json({ msg: "internal server error", seccess: false });
  }
};
const login = async (req, res) => {};
const logout = async (req, res) => {};

export { signup, login, logout };
