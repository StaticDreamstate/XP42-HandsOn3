//Requires:

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");

//Routes-Controllers:

router.post("/auth/login", authLoginValidator, AuthController.login);

module.exports = router;
