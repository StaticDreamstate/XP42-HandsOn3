//Requires:

const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");
const authCadastroValidator = require("../validators/auth/cadastro");
const psicologoController = require("../controllers/psicologos");

//Routes-Controllers:

//Login Route:

router.post("/login", authLoginValidator, AuthController.login);

//CRUD - Psicólogos:

router.get("/psicologos", psicologoController.index);
router.get("/psicologos/:id", psicologoController.exibir);
router.post("/psicologos/", authCadastroValidator, psicologoController.cadastrar);
router.put("/psicologos/:id", authCadastroValidator, psicologoController.atualizar);
router.delete("/psicologos/:id", psicologoController.deletar);

module.exports = router;
