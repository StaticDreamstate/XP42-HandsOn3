const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    id_psicologo: Joi.number().integer().required(),
    id_paciente: Joi.number().integer().required(),
    data_atendimento: Joi.date().required(),
    observacao: Joi.string().required(),
  }),
});