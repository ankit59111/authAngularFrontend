import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  updatePassword(event) {
    event.preventDefault();
    const password = event.target.querySelector('#pwd').value;
    const confirmPassword = event.target.querySelector('#cnfrmpwd').value;
    if (password === confirmPassword) {
      this.auth.updatepassword(this.activatedRoute.snapshot.paramMap.get('id'), this.activatedRoute.snapshot.paramMap.get('token'), password).subscribe(data => {
        if (data['status'] === 'success') {
          this.route.navigate(['login']);
        } else {
          alert('something went wrong try again');
        }
      });
    } else {
      alert('Please enter same value in both the fields');
    }
  }

}
