const User = require('../models/User');


module.exports = {
  async store(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({email, password});

    if(!user) {
      user = await User.create({name, email, password});
    };

    return res.json(user);
  }
  
};