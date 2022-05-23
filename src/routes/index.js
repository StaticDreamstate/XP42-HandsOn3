//Requires:
const express = require("express");
const router = express.Router();
const pacientesController = require('../controllers/pacienteController')


const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");

//Routes-Controllers:


router.get('/pacientes', pacientesController.listarPaciente);
router.get('/pacientes/:id', pacientesController.exibirPaciente)
router.post('/pacientes', pacientesController.cadastrarPaciente);
router.delete('/pacientes/:id', pacientesController.deletarPaciente);
router.put('/pacientes/:id', pacientesController.atualizarPaciente);

router.post("/auth/login", authLoginValidator, AuthController.login);

module.exports = router;




