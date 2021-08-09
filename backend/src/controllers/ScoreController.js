const User = require('../models/User');



module.exports = {
  async updateRight(req, res) {
    const _id = req.body.id_user;

    let user = await User.findOneAndUpdate({_id}, {$inc : {'right_answers' : 1}});

    return res.json({right_answers: user.right_answers});
  },

  async updateWrong(req, res) {
    const _id = req.body.id_user;

    let user = await User.findOneAndUpdate({_id}, {$inc : {'wrong_answers' : 1}});

    return res.json({wrong_answers: user.wrong_answers});
  }
}