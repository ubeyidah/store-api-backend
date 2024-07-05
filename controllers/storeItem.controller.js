import storeItemModel from "../models/storeItem.model.js";

const createStoreItem = async (req, res) => {
  try {
    const { name, catagory, measure, description } = req.body;
    const { userName } = req.user;
    if (!name || !catagory || !measure)
      return res
        .status(400)
        .json({ msg: "fill out the fileds.", sucess: false });
    const newStoreItem = await storeItemModel({
      author: userName,
      name,
      catagory,
      description,
      measure,
    }).save();
    res.status(201).json({ sucess: true, data: newStoreItem });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
};

const getAllStoreItems = async (req, res) => {
  try {
    const storeItems = await storeItemModel.find({});
    res.status(200).json({ sucess: true, data: storeItems });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
};

const updateStoreItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, catagory, measure, description } = req.body;
    if (!name || !catagory || !measure)
      return res.status(400).json({
        msg: "fill out missing name or catagory or measure.",
        sucess: false,
      });
    const storeItem = await storeItemModel.findById(id);
    if (!storeItem)
      return res.status(404).json({ msg: "item not found", sucess: false });
    await storeItemModel.findOneAndUpdate(
      { _id: id },
      { name, catagory, measure, description }
    );
    res.status(200).json({ msg: "successfully updated.", sucess: true });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
};

const deleteStoreItem = async (req, res) => {
  try {
    const { id } = req.params;
    await storeItemModel.findOneAndDelete({ _id: id });
    res.status(200).json({ msg: "successfully deleted.", sucess: true });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
};

export { createStoreItem, getAllStoreItems, updateStoreItem, deleteStoreItem };
