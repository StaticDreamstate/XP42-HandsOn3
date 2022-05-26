const Psicologo = require("./Psicologos");

const Paciente = require('./Paciente')
const Atendimentos = require('./Atendimentos');

Atendimentos.belongsTo(Paciente, {
    constraint: true,
    foreignKey: "paciente_id"
});
Paciente.hasMany(Atendimentos, {
    constraint: true,
    foreignKey: "paciente_id"
})

Atendimentos.belongsTo(Psicologo, {
    constraint: true,
    foreignKey: "psicologo_id"
});
Psicologo.hasMany(Atendimentos, {
    constraint: true,
    foreignKey: "psicologo_id"
})

module.exports = { Psicologo, Paciente, Atendimentos };

