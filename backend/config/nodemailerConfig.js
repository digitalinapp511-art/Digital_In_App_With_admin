const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    family: 4,

    auth: {
        user: process.env.EMAILId,
        pass: process.env.EMAILPASS,
    },

    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 20000,
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
