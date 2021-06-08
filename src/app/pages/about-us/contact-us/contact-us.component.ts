import { MailService } from './../../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  pageTitle: string;
  heroImg: string;

  constructor(
    private mailService: MailService,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.pageTitle = 'Contact Us';
    this.heroImg = '';
  }

  onSubmit() {
    const data = this.contactForm.value;
    this.mailService
      .sendContactMail(data)
      .then(async () => {
        const toast = await this.toast.create({
          header: 'Message Sent!',
          message: 'We will reach out shortly',
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
      })
      .catch(async (err) => {
        const toast = await this.toast.create({
          header: err,
          message: 'Close',
          position: 'bottom',
          color: 'danger',
        });
        await toast.present();
      })
      .finally(() => this.resetForm());
  }

  resetForm() {
    this.contactForm.reset();
  }
}
