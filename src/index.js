const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const server = express();
server.use(cors());
server.use(express.json());

const port = 4000;
server.listen(port, () => {
  console.log(`Servidor iniciado http://localhost:${port}`);
});

async function getConnection() {
  const connData = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };
  const conn = await mysql.createConnection(connData);
  return conn;
}
