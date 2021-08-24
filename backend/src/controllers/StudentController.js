const User = require('../models/User');


module.exports = {
//traz os dados de um aluno mediante a informado a id dele.
  async getStudent(req, res) {
    const _id = req.body.id_user;

    let student = await User.find({_id});

    return res.json(student);
  },

  async ChangePassword(req, res) {
      const new_password = req.body.new_password;
      const _id = req.body.id_user;

      const filter = {_id:_id};
      const update = {password: new_password};
      let doc = await User.findOneAndUpdate(filter, update, {new: true});
       
      console.log(doc.password);

      return res.json(200);
  }
};