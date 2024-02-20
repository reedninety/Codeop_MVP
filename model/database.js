require("dotenv").config();
const mysql = require("mysql");
const fs = require("fs");

const DB_HOST = process.env.localhost;
const DB_USER = process.env.alysreed;
const DB_PASS = process.env.root;
const DB_NAME = process.env.alys_mvp;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "alysreed",
  password: DB_PASS || "root",
  database: DB_NAME || "alys_mvp",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = fs.readFileSync(__dirname + "/init_db.sql").toString();
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation for mvp was successful!");

    console.log("Closing...");
  });

  con.end();
});
