import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() username;
  @Input() password;

  constructor(private snackBar: MatSnackBar, private router: Router, private sharedService: SharedService) { }

ngOnInit(): void {
  }

  reset(): void {
    this.password = '';
    this.username = '';
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['detail']);
      this.sharedService.changeLoginStatus(true);
    } else {
      this.snackBar.open('Invalid credentials', null, {
        duration: 2000,
      });
    }
  }

}
