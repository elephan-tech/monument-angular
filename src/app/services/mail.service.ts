import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import nodemailer from 'nodemailer';
import cors from 'cors';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private sendMailUrl =
    'https://us-central1-monument-academy.cloudfunctions.net/sendMail';
  constructor() {}

  contactForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }) {
    const html = `<body style="margin: 0; padding: 0;">
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

                                        <b>New Contact</b>
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
    ${data.firstName} ${data.lastName}
    ${data.message}
</body>
    `;
    const mailData = {
      from: 'team@elephan.tech',
      to: 'team@elephan.tech',
      subject: 'New Contact',
      html,
    };

    const mailTransport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pablo@elephan.tech',
        pass: 'Pipicaca123',
      },
    });
    this.sendMail(mailTransport, mailData);
  }

  sendMail(
    transport: any,
    config: {
      from?: string | any;
      to?: string;
      subject?: string;
      html?: string;
    }
  ) {
    console.log({ transport, config });
  }
}
