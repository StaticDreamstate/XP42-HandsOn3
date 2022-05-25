const Atendimentos = require("../models/Atendimentos");
const Paciente = require("../models/Paciente");

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
        const { paciente_id, data_atendimento, observacao } = req.body;
        const psicologo_id = req.auth.id;
        const paciente = await Paciente.findByPk(paciente_id);

        if (!paciente) {
            return res.json({mensagem: "Id não existente"})
        }

        const novoAgendamento = await Atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao,
            psicologo_id,
        });
        
        if(!novoAgendamento){
            return res.status(400).json({mensagem: "os dados não foram preenchidos corretamente, tente de novo!"});
        }

        res.status(201).json(novoAgendamento);
    },
}

module.exports = atendimentosController;