import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import axios from 'axios';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: any;
  isLoggedIn$ =  new BehaviorSubject<boolean>(false);

  constructor(
  private router: Router
  ) {
   }

  checkIfLoggedIn(): boolean {
    if (this.loggedIn) {
      return true;
    } else {
      return false;
    }
  }

  public get loggedIn(): boolean {
    // TODO: FIX LOGIC SO WE DONT GET HACKED
    return (localStorage.getItem('access_token') !== null);
  }

  private get token(): string {
    return localStorage.getItem('access');
  }

  login(form: FormGroup): Promise<boolean> {
    // TODO: use environment url
    const url = `${environment.apiUrl}/auth/local`;
    return axios.post(url, {
      identifier: form.value.email,
      password: form.value.password,
    }).then((res: any) => {
      localStorage.setItem('access_token', res.data.jwt);
      this.loggedInUser = res?.data?.user;
      return res.data;
    }).catch((err: any) => {
      // do we want to return the whole obj or just false?
      const errObject = {
        error: err.response.data.error,
        msg: err.response.data.message[0].messages[0].message,
        msgId: err.response.data.message[0].messages[0].id,
        statusCode: err.response.data.statusCode
      };
      return errObject;
    });
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/admin-login']);
  }
}
