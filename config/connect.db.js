import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ successfuly connected to mongodb.");
  } catch (error) {
    console.log("❌ couldn't connect to mongodb.");
  }
};

export default connectToDb;
