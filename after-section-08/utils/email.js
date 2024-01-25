const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) create a transporter
  const transporter = nodemailer.createTransport({
    // service: 'Gmail',
    host: process.env.EMAIL_HOST,
    prot: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
    // activiate in gmail "less secure app" option
  });
  // 2) define the email options
  const mailOptions = {
    from: 'Helen Huang <helen@test.io>',
    to: options.email,
    subject: options.subject,
    text: options.messge
    // html:
  };
  // 3) actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
