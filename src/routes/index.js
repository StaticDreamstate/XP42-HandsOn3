//Requires:
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");

//Routes-Controllers:

//Login Route:

router.post("/login", authLoginValidator, AuthController.login);

//CRUD - Psicólogos:


module.exports = router;




