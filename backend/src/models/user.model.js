import { pool } from "../config/db.js";

export const createUser = (username, email, password) => {
  return pool.execute(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, password]
  );
};

export const getUserByEmail = (email) => {
  return pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
};
