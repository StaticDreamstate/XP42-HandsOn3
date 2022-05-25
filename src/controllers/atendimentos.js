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
            return res.status(404).json({mensagem : "Id não encontrado"});
        }

        res.json(exibir);
    },
    agendar : async (req,res) =>{
        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

        const novoAgendamento = await Atendimentos.create({
            psicologo_id,
            paciente_id,
            data_atendimento,
            observacao,
        });
        if(!novoAgendamento){
            return res.status(400).json({mensagem: "os dados não foram preenchidos corretamente, tente de novo!"});
        }

        res.status(201).json(novoAgendamento);
    },
}

module.exports = atendimentosController;