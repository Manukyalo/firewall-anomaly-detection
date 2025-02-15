import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import cookieParser from "cookie-parser";

import authRotes from "./src/routes/authRoutes.js";
import { connectDB } from "./src/config/db.js";


const app = express();


app.use(cors());

//MIDDLEWARE

app.use(express.json());
app.use(cookieParser());
//ROUTES
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/auth", authRotes);


//START SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});