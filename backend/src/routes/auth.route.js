import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


router.post("/signup",signup)

router.post("/login" ,login)

router.post("/logout" , logout)

// protectRoute is a middleware to check if the user is logged in before changing the profile
router.put("/update-profile", protectRoute,updateProfile)

router.get("/check", protectRoute , checkAuth);

export default router;