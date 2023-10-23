import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import routerCategory from "./routes/category.js";
import routerContact from "./routes/contact.js"
import routerInformation from "./routes/information.js"
import routerCart from "./routes/cart.js";
import routerFavoriteProduct from "./routes/favoriteProduct.js";
import routerComment from "./routes/comment.js";
import routerAddress from "./routes/address.js";
import routerNews from "./routes/tb_new.js";
import routerimage_news from "./routes/image_news.js";
import routerImageProduct from "./routes/imageProduct.js";
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
app.use("/api", routerCart);
app.use("/api", routerFavoriteProduct);
app.use("/api", routerComment);
app.use("/api", routerAddress);
app.use("/api", routerNews);
app.use("/api", routerimage_news);
app.use("/api", routerImageProduct);
// database config
mongoose.connect(API_DB);
export const viteNodeApp = app;
