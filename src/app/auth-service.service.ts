import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email, password) {
    return this.http.post('http://localhost:5000/login', {email, password});
  }

  register(firstName, lastName, email, address, password) {
    return this.http.post('http://localhost:5000/register', {firstName, lastName, email, address, password});
  }

  sendResetEmail(email) {
    return this.http.post('http://localhost:5000/resetPassword', {email});
  }

  updatepassword(id, old_password, new_password) {
    return this.http.post('http://localhost:5000/updatePassword', {id, old_password, new_password});
  }

}
