import { pool } from "../config/db.js";

export const saveResetToken = (id, token, expiry) => {
  return pool.execute(
    "UPDATE users SET reset_token=?, reset_token_expiry=? WHERE id=?",
    [token, expiry, id]
  );
};

export const findUserByResetToken = (token) => {
  return pool.execute(
    "SELECT * FROM users WHERE reset_token=? AND reset_token_expiry > ?",
    [token, Date.now()]
  );
};

export const updatePassword = (id, password) => {
  return pool.execute(
    "UPDATE users SET password=?, reset_token=NULL, reset_token_expiry=NULL WHERE id=?",
    [password, id]
  );
};
