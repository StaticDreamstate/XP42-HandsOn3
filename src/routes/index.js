//Requires:
const express = require("express");
const router = express.Router();
const atendimentosController = require("../controllers/atendimentos");
const pacientesController = require('../controllers/pacienteController');
const AuthController = require("../controllers/auth");
const authLoginValidator = require("../validators/auth/login");
const authRegisterValidator = require("../validators/auth/register");
const atendimentoValidator = require('../validators/atendimentos/agendar');

//Routes-Controllers:

router.post("/auth/login", authLoginValidator, AuthController.login);
router.post("/auth/register", authRegisterValidator, AuthController.store);

router.get('/pacientes', pacientesController.listarPaciente);
router.get('/pacientes/:id', pacientesController.exibirPaciente)
router.post('/pacientes', pacientesController.cadastrarPaciente);
router.delete('/pacientes/:id', pacientesController.deletarPaciente);
router.put('/pacientes/:id', pacientesController.atualizarPaciente);

router.get('/atendimentos', atendimentosController.listar);
router.get('/atendimentos/:id', atendimentosController.exibir)
router.post('/atendimentos', atendimentoValidator, atendimentosController.agendar);

module.exports = router;



