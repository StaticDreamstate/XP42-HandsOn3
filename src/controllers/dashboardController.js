const sequelize = require("sequelize");
const { Psicologos, Paciente, Atendimentos } = require("../models");

const dashboardController = {
  
    totalPsicologos: async (req, res) => {

    try {
    
    const resposta = await Psicologos.count();
    res.status(200).json({total: resposta});

    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno do servidor. Detalhes: " + error.message });
    }
  },

  totalAtendimentos: async (req, res) => {

    try {
    
    const resposta = await Atendimentos.count();
    res.status(200).json({total: resposta});

    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno do servidor. Detalhes: " + error.message });
    }
  },


  totalPacientes: async (req, res) => {

    try {
    
    const resposta = await Paciente.count();
    res.status(200).json({total: resposta});

    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno do servidor. Detalhes: " + error.message });
    }
  },

  mediaAtendimentos: async (req, res) => {

    try {
    
    const resposta = await Number((Psicologos.count() / Paciente.count()).toFixed(1));

      res.status(200).json({ Média: resposta });

    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno do servidor. Detalhes: " + error.message });
    }
  },

};

module.exports = dashboardController;
