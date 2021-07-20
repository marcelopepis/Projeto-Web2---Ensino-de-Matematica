const nodemailer = require('nodemailer');




module.exports = ({email, message, subject}) =>{

    console.log(email);
    console.log(message);
    console.log(subject);

    const user = "calculando.contato@gmail.com";
    const pass = "$82UV2p6";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {user, pass}
    });

    transporter.sendMail({
      from: user,
      to: email,
      subject: subject,
      text: message
    }).then(info=>{
      console.log("email enviado");
    }).catch(error => {
      console.log("erro ao enviar email.");
    });
};