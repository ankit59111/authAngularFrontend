import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  sendMail(event) {
    const email = event.target.query('#email').value;
    this.authService.sendResetEmail(email).subscribe(data => {
      if (data['status'] === 'success') {
        alert('reset mail succesfully to your email_id');
      } else {
        alert('something went wrong try again');
      }
    });
  }

}
