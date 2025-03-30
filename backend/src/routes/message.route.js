import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSideBar, sendMessage } from "../controllers/message.controller.js";


const router = express.Router();


router.get("/users", protectRoute , getUsersForSideBar);
//the user id that we want to fetch our messages with
router.get("/:id" , protectRoute , getMessages);

//the user id that we want to send the message to 
router.post("/send/:id" , protectRoute , sendMessage);


export default router;