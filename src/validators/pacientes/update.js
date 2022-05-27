const { validate, Joi } = require("express-validation");
const JoiCustom = require('joi').extend(require('@joi/date'));

module.exports = validate({
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    data_nascimento: JoiCustom.date().format(['DD-MM-YYYY','DD/MM/YYYY']),
  }),
});

