import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#pwd').value;
    this.authService.login(email, password).subscribe(data => {
      if (data['status'] === 'success') {
        this.route.navigate(['home']);
      } else {
        alert('Invalid Credentials');
      }
    });
  }

}
