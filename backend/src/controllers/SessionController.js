const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const User = require('../models/User');
const SendMailTo = require("../services/sendMail");


module.exports = {
  async store(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;    


    let user = await User.findOne({email, password});

    if(!user) {
      user = await User.create({name, email, password});
    };

    SendMailTo({email:email, message:"mensagem de teste para envio de emails nodejs", subject:"E-mail Teste"})

    return res.json(user);
  }
  
};