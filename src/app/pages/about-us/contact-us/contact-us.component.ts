import { MailService } from './../../../services/mail.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor(private mailService: MailService) {}

  ngOnInit() {
    this.pageTitle = 'Contact Us';
    this.heroImg = '';
  }

  onSubmit() {
    const data = this.contactForm.value;
    this.mailService.sendContactMail(data);
  }
}
