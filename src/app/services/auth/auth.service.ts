import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import axios from 'axios';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInUser: any;
  token: string;
  isLoggedIn$ =  new BehaviorSubject<boolean>(false);

  constructor() { }

  checkIfLoggedIn() {
    if(this.isLoggedIn$.getValue()) {
      return true;
    } else {
      return false;
    }
  }

  setUser(userData) {
    this.loggedInUser = userData.user;
    this.token = userData.jwt;
    // TODO:
    localStorage.setItem('access_token', userData.jwt);
    this.isLoggedIn$.next(true);
  }


  login(form: FormGroup): Promise<any> {
    // TODO: use environment url
    return axios.post('http://localhost:1338/auth/local', {
      identifier: form.value.email,
      password: form.value.password,
    })
  }

// if (data) {
//   console.log(data);
// } else {

// }

//     console.log(data);
//     console.log('loggin in !', data)
// {
//     "statusCode": 400,
//     "error": "Bad Request",
//     "message": [
//         {
//             "messages": [
//                 {
//                     "id": "Auth.form.error.invalid",
//                     "message": "Identifier or password invalid."
//                 }
//             ]
//         }
//     ],
//     "data": [
//         {
//             "messages": [
//                 {
//                     "id": "Auth.form.error.invalid",
//                     "message": "Identifier or password invalid."
//                 }
//             ]
//         }
//     ]
// }
//   }
}
