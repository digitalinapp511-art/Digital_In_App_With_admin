const nodemailer = require("nodemailer");
const dns = require("dns");

require("dotenv").config();

dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    auth: {
        user: process.env.EMAILId,
        pass: process.env.EMAILPASS,
    },

    requireTLS: true,

    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
});

transporter.verify((error, success) => {
    if (error) {
        console.log("❌ Gmail SMTP Connection Failed");
        console.log(error);
    } else {
        console.log("✅ Gmail SMTP server is ready");
    }
});

module.exports = transporter;
