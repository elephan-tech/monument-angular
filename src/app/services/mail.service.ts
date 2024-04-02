import { Injectable } from '@angular/core';
import axios from 'axios';
import newContactTemplate from '../../templates/newContact';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private dev = true;
  public sendMailUrl = 'https://admin.monumentacademy.org/email';
  constructor() {}

  sendContactMail(data: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }): Promise<any> {
    const html = newContactTemplate(data);
    return this.sendMail({
      from: 'contact.monumentacademydc@gmail.com',
      to: [
        'info@monumentacademydc.org',
        'anna.scudiero@mapcsdc.org',
        'jeff.mchugh@mapcsdc.org',
        'team@elephan.tech',
      ],
      subject: 'New Contact 📫',
      html,
    });
  }

  sendMeetingContactMail(data: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }): Promise<any> {
    const html = newContactTemplate(data);
    return this.sendMail({
      from: 'contact.monumentacademydc@gmail.com',
      to: [
        'boardmeetings@mapcsdc.org',
      ],
      subject: 'New Contact 📫',
      html,
    });
  }

  sendMail(config: {
    from: string | any;
    to: string | string[];
    subject: string;
    html: string;
  }): Promise<any>{
    return axios
      .post(this.sendMailUrl, { ...config })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
}
