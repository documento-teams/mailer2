const express = require('express');
const cors = require("cors");
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true pour 465, false pour 587 ou 25
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { to, subject, text, html } = req.body;

    if (!to || !subject || (!text && !html)) {
        return res.status(400).json({ error: "Veuillez fournir 'to', 'subject' et 'text' ou 'html'" });
    }

    try {
        const info = await transporter.sendMail({
            from: `"Mon Service" <${process.env.SMTP_USER}>`,
            to,
            subject,
            text,
            html
        });

        res.json({ message: "Email envoyé avec succès", info });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'envoi de l'email", details: error });
    }
});

app.listen(3000, () => console.log("Serveur en écoute sur http://localhost:3000"));