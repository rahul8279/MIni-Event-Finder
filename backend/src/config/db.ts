import mongoose from "mongoose";
import ApiError from "../utils/apiError.ts";

const connectDB = async (): Promise<void> => {
  try {
    const mongodbUri = process.env.MONGO_URI as string;
    if (!mongodbUri) {
      throw new ApiError(500, "MongoDB_uri is nedded for database connections");
    }
    await mongoose.connect(mongodbUri);
    console.log("Database is connected.");
  } catch (error: any) {
    console.error("MongoDb is connection error :", error.message || error);
  }
};

export default connectDB;
