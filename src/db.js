import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jaguila:VdrQ1P3UfuQGHYJ6@cluster0.luqz0yr.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connection successful");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};


