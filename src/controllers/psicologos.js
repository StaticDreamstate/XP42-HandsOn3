const Psicologo = require('../models/Psicologos');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const PsicologoController = {
  
    index: async (req, res) => {
      try {
        const allPsicologos = await Psicologo.findAll();
        if (allPsicologos === null) { res.status(200).send([]); }
        res.status(200).json(allPsicologos);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Erro interno do servidor: " + error.message });
    }

  },

  exibir: async (req, res) => {
    const { id } = req.params;

    try {
      const psi = await Psicologo.findByPk(id);

      if (psi) {
        return res.status(200).json(psi);
      }

      res.status(404).json({ message: "Id não encontrado" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno. Detalhes: " + error.message });
    }
  },

  deletar: async (req, res) => {
    const { id } = req.params;

    try {
      const psi = await Psicologo.findByPk(id);

      if (!psi) {
        return res.status(404).json({ message: "Id não encontrado"});
      }

      await psi.destroy();

      res.status(204).send("");
    } catch (error) {
      res
        .status(500)
        .json({ error: "Erro interno. Detalhes: " + error.message });
    }
  },

  cadastrar: async (req, res) => {

    const { nome, email, senha, apresentacao } = req.body;

    if (!req.body) {
      return res.status(400).json({ error: "Parâmetros faltando ou incorretos." });
    }

    const hashSenha = bcrypt.hashSync(senha, 10);

    try {
      const { id } = await Psicologo.create({
      nome,
      email,
      senha: hashSenha,
      apresentacao,
    });

    const user = {
      id,
      nome,
      email,
      apresentacao,
    };

    const token = jwt.sign(user, secret.key);
    return res.status(201).json({ token, user, });
  
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro interno. Detalhes: " + error.message });
  }
  },

atualizar: async (req, res) => {

  const { id } = req.params;
  const { nome, email, senha, apresentacao } = req.body;

  if (!req.body) {
    return res.status(400).json({ error: "Parâmetros faltando ou incorretos." });
  }

  const hashSenha = bcrypt.hashSync(senha, 10);

  try {
    
    const psi = await Psicologo.findByPk(id);
   
    if (!psi) {
      return res.status(400).json({ error: "Parâmetros faltando ou incorretos." });
    }

    const updated = await Psicologo.update({
    nome,
    email,
    senha: hashSenha,
    apresentacao,
  }, {
    where: {
      id,
    },
  });

  const user = {
    id,
    nome,
    email,
    apresentacao,
  };

  const token = jwt.sign(user, secret.key);
  return res.status(200).json({ token, user, });

} catch (error) {
  res
    .status(500)
    .json({ error: "Erro interno. Detalhes: " + error.message });
}
},

};

module.exports = PsicologoController;
