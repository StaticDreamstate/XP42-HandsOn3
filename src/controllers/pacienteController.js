
const { Paciente } =  require('../models');

const pacientesController = {
  listarPaciente: async (req, res) => {

    try {
      const listaDePaciente = await Pacientes.findAll();

      res.json(listaDePaciente);
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ error: "Ops, tivemos um erro, tente novamente mais tarde." });
    }
  },

  

  exibirPaciente: async (req, res) => {
    const { id } = req.params;

    try {
      const paciente = await Paciente.findByPk(id);

      if (paciente) {
        return res.json(paciente);
      }

      res.status(404).json({
        message: "Id não encontrado",
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Oops, tivemos um erro, tente novamente." });
    }
  },



  async cadastrarPaciente (req, res) {
    console.log(req.user);
    const { id, nome, email, data_nascimento} = req.body;
    
    const novoPaciente = await Pacientes.create({
      nome,
      email,
      data_nascimento,
    });

    // const categoria = await Categorias.findByPk(categoria_id);
    // await novoPaciente.setCategorias(categoria);
    // console.log(req.body);
    res.status(201).json(novoPaciente);
  },

 
deletarPaciente: async (req, res) => {
  const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      res.status(404).json({
        mensagem: "Id não encontrado",
      });
    }
    await paciente.destroy();
    res.status(204).json({
      message: "Paciente excluido",
    });

},

  async atualizarPaciente (req, res) {
    const { id } = req.params;
    const {nome, email, data_nascimento} = req.body;

    if(!id) return res.status(400).json("id nao enviado");

    const pacienteAtualizado =  await Paciente.update({
      nome,
      email, 
      data_nascimento,
    },{
      where: {
        id,
      },
    }
    );
    res.json("Dados do paciente atualizados")
  }
};
//teste

module.exports = pacientesController;

