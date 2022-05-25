const Psicologo = require("./Psicologos");
const Paciente = require('./Paciente')
const Atendimentos = require('./Atendimentos');

// Paciente.belongsTo(Atendimentos, {
//   foreignKey: "id_paciente",
// });

// Atendimentos.hasMany(Paciente, {
//   foreignKey: "id_psicologo",
// });


module.exports = { Psicologo, Paciente, Atendimentos };
