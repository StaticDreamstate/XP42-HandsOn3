const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Usuario = require("../models/Usuario");
const secret = require("../configs/secret");

const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
    }

    const user = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };

    const token = jwt.sign(user, secret.key);

    return res.json({
      token,
      user,
    });
  },
};

module.exports = AuthController;
