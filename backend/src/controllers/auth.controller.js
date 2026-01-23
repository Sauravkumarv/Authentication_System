import bcrypt from "bcryptjs";
 import { createUser, getUserByEmail } from "../models/user.model.js";
  import { generateToken } from "../utils/token.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if(username.length<3){
        return res.status(400).json({ message: "Username should be atleast 3 characters" });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 digits" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser(username, email, hashedPassword);

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Email already exists" });
    }
    res.status(500).json({ message: "Signup failed" });
  }
}

export const signin = async (req, res) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (password.length<6) {
    return res.status(400).json({ message: "Password must be 6 characters" });
  }

  try {
    const [rows] = await getUserByEmail(email);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = generateToken(user.id);

    res.cookie("token", token, {
    httpOnly: true,
    secure: false,      
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  })
  .json({
    message: "Login successful",
    user: {
    id: user.id,
    username: user.username,
    email: user.email,
  },
  });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login failed" });
  }

}
export const logout = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: false, 
    })
    .json({ message: "Logout successful" });
};


export const checkAuth = async (req, res) => {
  try {
    const [rows] = await getUserById(req.userId);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = rows[0];

    res.status(200).json({
      message: "Authenticated",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Auth check failed" });
  }
};
