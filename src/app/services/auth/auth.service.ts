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
  user: User,
  jwt: string,
  error?: Error,
};

// authToken: any;
//   user: any;

//   constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }


//   isAuthenticated(): boolean {
//     const token = localStorage.getItem('id_token');
//     return !this.jwtHelper.isTokenExpired(token);
//   }

//   storeUserData(token, user) {
//     localStorage.setItem('id_token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//     this.authToken = token;
//     this.user = user;
//   }

//   loadToken() {
//     const token = localStorage.getItem('id_token');
//     this.authToken = token;
//   }

//   loggedIn() {
//     return this.jwtHelper.isTokenExpired('id_token');
//   }

//   logout() {
//     this.authToken = null;
//     this.user = null;
//     localStorage.clear();
//   // }


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

  loginFail({error}): Error {
    const errObject = {
        code: error.statusCode,
        message: error.data[0].messages[0].message
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
    } catch (result) {
      return this.loginFail(result);
    }
  }

  logout(): void {
    this.authToken = null;
    this.user = null;
    sessionStorage.clear();
    this.router.navigate(['/admin-login']);
  }
}
