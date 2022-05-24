const Atendimentos = require("../models/Atendimentos");
const db = require('../database');

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
        
        const {id,id_paciente, data_atendimento, observacao, id_psicologo} = req.body;
        const novoAgendamento = await Atendimentos.create({
            id,
            id_psicologo,
            id_paciente,
            data_atendimento,
            observacao,
        });
        if(!novoAgendamento){
            return res.status(400).json({mensagem: "os dados não foram preenchidos corretamente, tente de novo!"});
        } else
        if(novoAgendamento){
            return res.status(201).json(novoAgendamento);
        }
    },
}

module.exports = atendimentosController;