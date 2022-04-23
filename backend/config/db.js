require("dotenv").config();
const mongoose = require("mongoose");
const DB = "mongodb+srv://psms:psms5259@cluster0.n1eyz.mongodb.net/psms?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
