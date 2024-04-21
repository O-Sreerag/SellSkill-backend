import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://127.0.0.1:27017/p2test"
      process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb://career-mongo-srv:27017/career"
    );
    console.log(`Project-db connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };