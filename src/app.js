import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routerCategory from "./routes/category.js";
import routerContact from "./routes/contact.js"
import routerInformation from "./routes/information.js"
//config
const app = express();
const API_DB = process.env.API_DB;
dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// router
app.use("/api", routerCategory);
app.use("/api", routerContact);
app.use("/api", routerInformation);

// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
