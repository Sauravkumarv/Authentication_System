import express from "express";
import { signup, signin, logout, checkAuth } from "../controllers/auth.controller.js";
import { resetPassword } from "../controllers/auth.resetPassword.controller.js";
import { forgotPassword } from "../controllers/auth.fogetPassword.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout",logout)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/me", authMiddleware, checkAuth);


export default router;
