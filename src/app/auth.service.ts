import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(register) {
    return this.http.post("http://localhost:3011/api/register", register);
  }

  loginUser(login) {
    return this.http.post("http://localhost:3011/api/login", login);
  }
}
