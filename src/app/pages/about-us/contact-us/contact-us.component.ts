import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = new FormGroup({
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  message: new FormControl('', [Validators.required, Validators.minLength(10)])
});

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Logic here to submit
    console.log(this.contactForm);
  }

}
