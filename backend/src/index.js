import express from "express";
import dotenv from "dotenv"; // Imports the dotenv package. dotenv is used to load environment variables from a .env file into process.env
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser());
app.use(cors(
    {
        origin : "http://localhost:5173",
        credentials :true , //allow cookies
    }
));
app.use("/api/auth" , authRoutes);
app.use("/api/messages" , messageRoutes);



server.listen(PORT, ()=> {
    console.log("server is running on PORT : " + PORT);
    connectDB();
})