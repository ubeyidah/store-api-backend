import Items from "../models/item.model.js";
import OutItems from "../models/outItem.model.js";

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
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Items.findOneAndDelete({ _id: id });
    if (!item)
      return res.status(404).json({ msg: "item not found", secess: false });
    res.status(200).json({ msg: "successfully deleted!", sucess: true });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { inStock, description, expireOn } = req.body;
    if (!inStock || !expireOn)
      return res
        .status(400)
        .json({ msg: "fill out the filed!", sucess: false });
    const updatedItem = await Items.findOneAndUpdate(
      { _id: id },
      { inStock, description, expireOn }
    );
    if (!updatedItem)
      return res.status(404).json({ msg: "item not found", sucess: false });
    res.status(200).json({ msg: "sucessfully updated", sucess: true });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

const outItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const { userName } = req.user;
    if (!quantity)
      return res.status(400).json({ msg: "fill out quantity!", secess: false });
    const matchItem = await Items.findById(id);
    if (!matchItem)
      return res.status(404).json({ msg: "item not found!", secess: false });
    const newOutItem = await OutItems({
      author: userName,
      itemId: matchItem._id,
      quantity,
    }).save();
    res.status(200).json({ sucess: true, data: newOutItem });
  } catch (error) {
    res.status(500).json({ msg: error.message, secess: false });
  }
};

export { addItem, deleteItem, updateItem, outItem };
