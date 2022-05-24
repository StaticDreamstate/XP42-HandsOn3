 const Atendimentos = require("../models/Atendimentos");

const atendimentosController = {
    listar : async (req, res) =>{
        await Atendimentos.sync({}) 
    } ,
    exibir : async () =>{

    },
    agendar : async ( ) =>{

    },
}

module.exports = atendimentosController;