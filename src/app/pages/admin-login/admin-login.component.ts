import { ToastService } from './../../services/toast/toast.service';
import { Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { IonInput, ToastController } from '@ionic/angular';


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
    private router: Router,
    private toast: ToastService,
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

  async loginSuccess(value): Promise<void> {
    this.router.navigate(['/admin']);
    const toast = await this.toast.toasty({
      header: 'Success!',
      message: `Welcome ${value?.user?.username}!`,
      code: 200,
    });
    await toast.present();
  }

  login(): void {
    this.authService.login(this.loginForm).then(value => {
      return value.jwt
      ? this.loginSuccess(value)
      : this.handleAuthError(value);
    });

  }
}
