const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Kết nối MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "user",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "mydb",
});

connection.connect((err) => {
  if (err) {
    console.error(" Kết nối MySQL thất bại:", err);
    return;
  }
  console.log(" Đã kết nối MySQL thành công!");
});

app.get("/", (req, res) => {
  res.send(" Node.js & MySQL đang chạy trên Docker!");
});

app.listen(PORT, () => {
  console.log(` Server đang chạy tại http://localhost:${PORT}`);
});
