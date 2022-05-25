const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    psicologo_id: Joi.number().integer().required(),
    paciente_id: Joi.number().integer().required(),
    data_atendimento: Joi.date().required(),
    observacao: Joi.string().required(),
  }),
});