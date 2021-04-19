/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
  origin: "*",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Content-Length",
    "X-Requested-With",
    "Accept",
  ],
});
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@monumentacademydc.org",
    pass: "",
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendMail = functions.https.onRequest((req, res) => {
  const { data, config } = req.body;

  cors(req, res, () => {
    return mailTransport.sendMail(config, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send("Sent", { info, data });
    });
  });
});
