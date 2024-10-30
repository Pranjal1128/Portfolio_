const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({message: "Hello"});
})

// Route for handling email submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Set up transporter for email using nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',  // you can choose other services like Outlook, etc.
      auth: {
        user: process.env.EMAIL, // Add your email in .env file
        pass: process.env.PASSWORD // Add your email password in .env file
      }
    });

    // Mail options
    let mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // Your email where messages will be received
      subject: `Portfolio Contact from ${name}`,
      text: message
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
