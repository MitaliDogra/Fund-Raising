// const mongoose = require("mongoose");
import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://mitalidogra20:AaR2YKaBd4ibl0M8@fundraising.7y972.mongodb.net/?retryWrites=true&w=majority&appName=fundRaising";

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.error("Error connecting to database", err);
    process.exit(1);
  }
}
export default connectDb;