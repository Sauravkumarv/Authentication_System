import bcrypt from "bcryptjs";
import crypto from "crypto";
import { findUserByResetToken, updatePassword } from "../models/forgetPassword.model.js";

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password too short" });
  }

  const hashedToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const [rows] = await findUserByResetToken(hashedToken);

  if (rows.length === 0) {
    return res.status(400).json({ message: "Invalid or expired token" });
  }

  const user = rows[0];

  const hashedPassword = await bcrypt.hash(password, 10);
  await updatePassword(user.id, hashedPassword);

  res.json({ message: "Password reset successful" });
};
