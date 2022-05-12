require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());

// send the user to index html page inspite of the url
app.get('/', (req, res) => { 
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.post('/', (req, res) => { 
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.NODEMAILER_SENDER,
      pass: process.env.NODEMAILER_SENDER_PASS
    }
  })

  const mailOptions = {
    from: process.env.NODEMAILER_SENDER,
    to: process.env.NODEMAILER_RECEIVER,
    subject: `Message from ${req.body.email}:  ${req.body.subject}`,
    text: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
    }
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});