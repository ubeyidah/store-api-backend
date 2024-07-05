import storeItemModel from "../models/storeItem.model.js";

const createStoreItem = async (req, res) => {
  try {
    const { name, catagory, measure } = req.body;
    const { userName } = req.user;
    if (!name || !catagory || !measure)
      return res
        .status(400)
        .json({ msg: "fill out the fileds.", sucess: false });
    const newStoreItem = await storeItemModel({
      author: userName,
      name,
      catagory,
      measure,
    }).save();
    res.status(201).json({ sucess: true, data: newStoreItem });
  } catch (error) {
    res.status(500).json({ error: error.message, sucess: false });
  }
};

export { createStoreItem };
