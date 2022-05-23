//Requires:

const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");
const authRegisterValidator = require("../validators/auth/register");

//Routes-Controllers:

router.post("/auth/login", authLoginValidator, AuthController.login);
router.post("/auth/register", authRegisterValidator, AuthController.store);
module.exports = router;
