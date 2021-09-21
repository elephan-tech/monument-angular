import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


type Error = {
  code: number,
  message: string,
};

type UserRole = { id: number, name: string, description: string, type: string };

type User = {
  blocked?: boolean
confirmed?: boolean
created_at?: string
email: string
id: number
provider?: string
role?: UserRole
updated_at?: string

};


type AuthResponse = {
  user?: User,
  jwt: string,
  error?: Error,
  isAuth?: boolean
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string | null;
  user: any;
  error: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  isAuthenticated(token: string): boolean {
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  storeUserData(token: string, user: any): void {
    sessionStorage.setItem('access_token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(): string {
    const token = sessionStorage.getItem('access_token');
    this.authToken = token;
    return token;
  }

  loggedIn(): boolean {
    const token = this.loadToken();
    return !this.jwtHelper.isTokenExpired(token);
  }

  loginSuccess(res): AuthResponse {
    const { jwt, user } = res;
    this.storeUserData(jwt, user);
    return {jwt: this.authToken, user: this.user};
  }

  loginFail({ error }): any {
    console.log({error})
    const errObject = {
        code: error.statusCode,
        message: error?.data?.[0]?.messages?.[0]?.message || 'undefined'
      };
    return errObject;
  }

  async login(form: FormGroup): Promise<any>{
    const url = `${environment.apiUrl}/auth/local`;
    const data = {
      identifier: form.value.email,
      password: form.value.password,
    };

    try {
      const res = await this.http.post(url, data).toPromise();
      return this.loginSuccess(res);
    } catch (err) {
      console.log(err)
      return this.loginFail(err);
    }
  }

  logout(): void {
    this.authToken = null;
    this.user = null;
    sessionStorage.clear();
    this.router.navigate(['/admin-login']);
  }
}
