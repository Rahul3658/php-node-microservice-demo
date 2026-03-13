const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "demo"
});

app.get("/users", (req, res) => {

  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });

});

app.listen(3000, () => {
  console.log("Node API running on port 3000");
});
