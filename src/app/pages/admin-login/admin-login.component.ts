import { Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular';


export interface Error {
  statusCode: number;
  error: string;
  message: Array<ErrorObject>;
  data: Array<ErrorObject>;
}

export interface ErrorObject {
  messages: Array<ErrorMessage>;
}

export interface ErrorMessage {
  id: string;
  message: string;
}
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  error: Error;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    if (this.authService.loggedIn) {
      this.router.navigate(['/admin']);
    }
  }

  ngOnInit(): void {
  }

  handleAuthError(err): void {
    this.error = err.message;
    this.loginForm.setErrors({
      invalid: true
    });
  }

  loginSuccess(): void {
    this.router.navigate(['/admin']);
  }

  login(): void {
    this.authService.login(this.loginForm).then(value => {
     value.jwt
      ? this.loginSuccess()
      : this.handleAuthError(value);
    });

  }
}
