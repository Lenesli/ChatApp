import express from "express";
import dotenv from "dotenv"; // Imports the dotenv package. dotenv is used to load environment variables from a .env file into process.env
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app= express();
const PORT = process.env.PORT;

app.use("/api/auth" , authRoutes);

app.listen(PORT, ()=> {
    console.log("server is running on PORT : " + PORT);
    connectDB();
})