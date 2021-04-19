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
    user: "pablo@elephan.tech",
    pass: "Pipicaca123",
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.sendMail = functions.https.onRequest((req, res) => {
  const { title, data, html } = req.body;

  const defaultTemplate = `<body style="margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td style="padding: 10px 0 30px 0;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                    <tr>
                        <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">

                                        <b>${title}</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                        New Contact!
                                    </td>
                                </tr>
                                <tr>

                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    ${data.email}
    ${data.name} ${data.lastName}
    ${data.message}
</body>
    `;
  cors(req, res, () => {
    console.log({ req, res });
    const mailData = {
      from: "team@elephan.tech",
      to: "team@elephan.tech",
      subject: "New Contact",
      html: html || defaultTemplate,
    };

    return mailTransport.sendMail(mailData, (error, info) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send("Sended", info);
    });
  });
});
