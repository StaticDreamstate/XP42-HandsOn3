//Requires:
const express = require("express");
const atendimentosController = require("../controllers/atendimentos");

const router = express.Router();
const pacientesController = require('../controllers/pacienteController')


const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");
const authRegisterValidator = require("../validators/auth/register");

//Routes-Controllers:


router.get('/pacientes', pacientesController.listarPaciente);
router.get('/pacientes/:id', pacientesController.exibirPaciente)
router.post('/pacientes', pacientesController.cadastrarPaciente);
router.delete('/pacientes/:id', pacientesController.deletarPaciente);
router.put('/pacientes/:id', pacientesController.atualizarPaciente);

router.post("/auth/login", authLoginValidator, AuthController.login);
router.post("/auth/register", authRegisterValidator, AuthController.store);
module.exports = router;

router.get('/atendimentos', atendimentosController.listar);
router.get('/atendimentos/:id', atendimentosController.exibir)
router.post('/atendimentos', atendimentosController.agendar);

module.exports = router;



