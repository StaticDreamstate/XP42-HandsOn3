const db = require('../database');
const { DataTypes } = require('sequelize');


const Paciente = db.define("Pacientes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento:{
    type: DataTypes.STRING,
    allowNull: false,
  },
},
 {
  tableName: 'pacientes', timestamps: false, underscored: true
  }
);


module.exports = Paciente;