import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";
import { saveResetToken } from "../models/forgetPassword.model.js";
import { getUserByEmail } from "../models/user.model.js";

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  const [rows] = await getUserByEmail(email);

  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  const user = rows[0];

  // generate token
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const expiry = Date.now() + 15 * 60 * 1000; // 15 min

  await saveResetToken(user.id, hashedToken, expiry);

  const resetLink = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await sendEmail(
    user.email,
    "Reset your password",
    `<p>Click to reset password:</p>
     <a href="${resetLink}">${resetLink}</a>`
  );

  res.json({ message: "Reset link sent to email" });
};
