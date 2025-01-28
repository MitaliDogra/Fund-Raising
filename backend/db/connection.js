// const mongoose = require("mongoose");
import mongoose from "mongoose";

const MONGO_URL = "";

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fund");
    console.log("Database connected");
  } catch (err) {
    console.error("Error connecting to database", err);
    process.exit(1);
  }
}
export default connectDb;