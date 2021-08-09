const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const User = require('../models/User');
const SendMailTo = require("../services/sendMail");


module.exports = {
  async store(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;  
    const role = req.body.role;
    const wrong_answers = req.body.wrong_answers;
    const right_answers = req.body.right_answers;
    const id_class = req.body.id_class;


    let user = await User.findOne({email, password});

    if(!user) {
      user = await User.create({name, email, password, role, id_class, wrong_answers, right_answers});
    };

    SendMailTo({email:email, message:"Seu usuário na plataforma Calculando foi criado!", subject:"Usuário Criado"})

    return res.json(user);
  },

  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    let user = await User.findOne({email, password});

    if(!user) {
      return res.json("user not found");
    }else{
      return res.json(user);
    }
  }  
};