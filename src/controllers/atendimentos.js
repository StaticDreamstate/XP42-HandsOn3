const { Psicologo, Paciente, Atendimentos } = require("../models");

const atendimentosController = {
    listar : async (req, res) =>{
        const listar = await Atendimentos.findAll({
            attributes: ["id", "data_atendimento", "observacao"],
            include: [
                Paciente,
                {
                    model: Psicologo,
                    attributes: ["id", "nome", "email", "apresentacao"]
                }
            ]
        }); 
        res.json(listar);
    } ,
    exibir : async (req, res) =>{
        const id = req.params.id;

        const exibir = await Atendimentos.findByPk(id, {
            attributes: ["id", "data_atendimento", "observacao"],
            include: [
                Paciente,
                {
                    model: Psicologo,
                    attributes: ["id", "nome", "email", "apresentacao"]
                }
            ]
        });
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
            return res.json({mensagem: "Id do paciente inválido"});
        }

        const novoAgendamento = await Atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao,
            psicologo_id,
        });
        
        if(!novoAgendamento){
            return res.status(400).json({mensagem: "Dados invalidos"});
        }

        const resultado = await Atendimentos.findByPk(novoAgendamento.id, {
            attributes: ["id", "data_atendimento", "observacao"],
            include: [
                Paciente,
                {
                    model: Psicologo,
                    attributes: ["id", "nome", "email", "apresentacao"]
                }
            ]
        })

        res.status(201).json(resultado);
    },
}

module.exports = atendimentosController;