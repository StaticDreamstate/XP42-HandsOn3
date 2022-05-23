const { Psicologos } = require("../models");

module.exports = async (req, res, next) => {
  if (req.auth) {
    const psi = await Psicologos.findByPk(req.auth.id);
    if (!psi) {
      next({
        status: 401,
        name: "UnauthorizedError",
        inner: {
          message: "Invalid user code",
        },
      });
    }
  }

  next();
};
