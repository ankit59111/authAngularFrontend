import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  onRegister(event) {
    event.preventDefault();
    const firstName = event.target.querySelector('#first-name').value;
    let lastName = event.target.querySelector('#last-name').value;
    const email = event.target.querySelector('#email').value;
    const address = event.target.querySelector('#address').value;
    const password = event.target.querySelector('#pwd').value;
    const confirmPassword = event.target.querySelector('#confirmPwd').value;
    if (firstName && email && address && password && password === confirmPassword) {
      lastName = lastName !== '' ? lastName : '';
      this.authService.register(firstName, lastName, email, address, password).subscribe((data) => {
        if (data['status'] === 'success') {
          this.route.navigate(['login']);
        } else {
          alert(data['message']);
        }
      });
    } else {
      alert('confirm password is not equal to password');
    }
  }

}
