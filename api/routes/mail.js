const nodemailer = require('nodemailer');
const express = require('express');
const { ModeEditOutlineSharp } = require('@mui/icons-material');
const router = express.Router();

router.post('/sendOrder', (req, res) => {
  console.log('entre!');
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'maatias.92@hotmail.com',
      pass: '',
    },
  });

  const options = {
    from: 'maatias.92@hotmail.com',
    to: req.body.email,
    subject: 'Bierfass',
    text: 'Gracias por comprar con nosotros!',
    html: ` <h1> <b> Bierfass  </b> </h1>
    <h3>Buenos dias!</h3>
    <h6>Se ha confirmado a compra de su pedido! Gracias por comprar con nosotros!</h6>`,
  };

  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send(error);
      return;
    }
    res.status(200).send('Email sent');
  });
});

module.exports = router;
