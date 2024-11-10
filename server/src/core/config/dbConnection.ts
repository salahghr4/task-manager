import mongoose from "mongoose";

export const connectToDb = async (uri: string): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log(error);
  }
};
