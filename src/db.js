import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog");
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};
