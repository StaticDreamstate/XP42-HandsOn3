const { DataTypes } = require("sequelize");
const db = require("../database");
const Paciente = require("./Paciente");

const Atendimentos = db.define(
  "atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Paciente,
        key: "id",
      },
      allowNull: false,
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_atendimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    observacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  { tableName: "atendimentos", timestamps: false, underscored: true }
);

module.exports = Atendimentos;