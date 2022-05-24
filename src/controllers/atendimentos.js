const Atendimentos = require("../models/Atendimentos");

const atendimentosController = {
    listar : async (req, res) =>{

      const listar = await Atendimentos.findAll(); 
      res.json(listar);

    } ,
    exibir : async (req, res) =>{
        const id = req.params.id;
        const exibir = await Atendimentos.findByPk(id);
        if(!exibir){
            return res.status(404).json({mensagem : "não encontrado nenhum dado a partir desse id"});
        }

        res.json(exibir);
    },
    agendar : async (req,res) =>{


    },
}

module.exports = atendimentosController;