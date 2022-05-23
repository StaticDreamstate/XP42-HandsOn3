
//Requires: 

const express = require("express");
const db = require("./database");

//Instances:

const app = express();

db.hasConnection();

//Tcp Connection Port:

const port = 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`[OK] Server listening [TCP Port: ${port}]`);
});
