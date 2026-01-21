// src/config/db.js
import mysql from "mysql2/promise";
import "dotenv/config";

let pool;

const dbConnect = async () => {
  if (pool) return pool; 

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  console.log("DB connected");
  return pool;
};

export { dbConnect, pool };
