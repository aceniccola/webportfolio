const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asceniccola@gmail.com',
        pass: 'your-password' // TODO: setup OAuth2 or an App Password for Gmail
    }
});

// Endpoint to send email
app.post('/send', (req, res) => {
    const { firstname, lastname, email, message } = req.body;

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com', // Email where you want to receive messages
        subject: `New message from ${firstname} ${lastname}`,
        text: `Email: ${email}\n\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});