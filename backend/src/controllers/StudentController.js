const User = require('../models/User');


module.exports = {
//traz os dados de um aluno mediante a informado a id dele.
  async getStudent(req, res) {
    const id_user = req.body.id_user;

    let student = await User.find({id_user});

    return res.json(student);
  }
};