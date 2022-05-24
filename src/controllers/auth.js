//Requires:

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Psicologo = require("../models/Psicologos");
const secret = require("../configs/secret");

//Controller:

const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const psi = await Psicologo.findOne({
      where: {
        email,
      },
    });

    if (!psi || !bcrypt.compareSync(senha, psi.senha)) {
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
    }

    const user = {
      id: psi.id,
      nome: psi.nome,
      email: psi.email,
    };

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  },
  store: async (req, res) => {
    const { nome, email, senha, apresentacao } = req.body;
    const hashSenha = bcrypt.hashSync(senha, 10);

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
    };

    const token = jwt.sign(user, secret.key);

    return res.status(201).json({
      token,
      user,
    });
  },
};

module.exports = AuthController;
