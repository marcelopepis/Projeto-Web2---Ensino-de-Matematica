const User = require('../models/User');
const Class = require('../models/Class');

module.exports = {

  async store(req, res) {
    const id_class = req.body.id_class;
    const class_name = req.body.class_name;
    const id_professor = req.body.id_professor;

    let turma = await Class.findOne({id_class});

    if(!turma) {
      turma = await Class.create({id_class, class_name, id_professor});
    }

    return res.json(turma);
  },

  async listClasses(req, res) {
    const id_professor = req.body.id_professor;

    let classes = await Class.find({id_professor});

    return res.json(classes);
  },

  async listClassMembers(req, res) {
    const id_class = req.body.id_class;

    let users = await User.find({id_class});

    return res.json(users);
  }
};