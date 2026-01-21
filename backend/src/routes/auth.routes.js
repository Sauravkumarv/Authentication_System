import express from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import { resetPassword } from "../controllers/auth.resetPassword.controller.js";
import { forgotPassword } from "../controllers/auth.fogetPassword.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);


export default router;
