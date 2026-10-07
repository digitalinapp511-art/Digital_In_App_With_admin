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

    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

transporter.verify((error, success) => {
    if (error) {
        console.log("❌ Gmail SMTP Connection Failed");
        console.log(error);
    } else {
        console.log("✅ Gmail Authentication Successful");
        console.log("📧 SMTP server is ready");
    }
});

module.exports = transporter;
