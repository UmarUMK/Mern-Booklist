import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import booksRouter from "./routes/booksRoute.js";
import { connectDb } from "./db/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.send("HI i am Umar");
});

app.listen(port, () => {
  connectDb();
  console.log(`server is running on port ${port} `);
});
