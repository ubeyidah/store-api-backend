import Items from "../models/item.model.js";

const addItem = async (req, res) => {
  try {
    const { userName } = req.user;
    const { parentId, inStock, description, expireOn } = req.body;
    if (!parentId || !inStock || !expireOn)
      return res
        .status(400)
        .json({ msg: "fill out the filed!", sucess: false });
    const newItem = await Items({
      author: userName,
      parentId,
      inStock,
      expireOn,
      description,
    }).save();
    res.status(201).json({ sucess: true, data: newItem });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

export { addItem };
