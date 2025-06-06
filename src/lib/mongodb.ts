import mongoose from "mongoose";
const { MONGODB_URI } = process.env;

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(MONGODB_URI as string);
    if (connection.readyState === 1) {
      console.log("DB connected");
      return Promise.resolve(true);
    } else {
      console.log("DB is not connected");
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};


