
//Requires: 

const express = require("express");
const db = require("./database");
const handleError = require("./middlewares/handleError");
const authMiddleware = require("./middlewares/auth");
const jwtMiddleware = require("./middlewares/jwt");
const routes = require("./routes");

//Instances:

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(jwtMiddleware.unless({ path: ["/auth/login", "/auth/register"] }));
app.use(authMiddleware);

db.hasConnection();

//Tcp Connection Port:

const port = 3000;

//Uses: 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(handleError);
app.use((req, res) => {
  res.status(404).json({ message: "URL não encontrada" });
});

//Server Connction:

app.listen(port, () => {
  console.log(`[OK] Servidor Escutando... [Porta TCP: ${port}]`);
});
