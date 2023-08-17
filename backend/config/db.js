const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connect.Connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(); // Exit the app if connection fails!
  }
};

module.exports = connectDB;
