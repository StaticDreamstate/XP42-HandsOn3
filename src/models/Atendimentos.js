const { DataTypes } = require("sequelize");
const db = require("../database");

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

