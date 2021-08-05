import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';


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

  login(): void {
    this.authService.login(this.loginForm).then((res: any) => {
      if (res.user) {
        this.router.navigate(['/admin']);
      } else {
        this.error = res.msg;
        this.loginForm.setErrors({
        invalid: true
      });
      }
    }).catch((err) => {
      console.error(err);
    });
  }

}
