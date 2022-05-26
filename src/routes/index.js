//Requires:

const express = require("express");
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');


//Routes - Dashboar:

router.get('/dashboard/psicologos', dashboardController.totalPsicologos);
router.get('/dashboard/atendimentos', dashboardController.totalAtendimentos);
router.get('/dashboard/pacientes', dashboardController.totalPacientes);
router.get('/dashboard/media', dashboardController.mediaAtendimentos);

module.exports = router;
