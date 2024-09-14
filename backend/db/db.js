import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(`${process.env.MDB_URI}/${DB_NAME}`);
    console.log(`mongoDB connected instance${db.connection.host}`);
  } catch (error) {
    console.log(`Error:`, error);
    throw new Error(error);
  }
};
