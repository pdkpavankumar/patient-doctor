import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'doctor';
  isLoggedIn = false;
  constructor(private sharedService: SharedService, private router: Router) { }
  ngOnInit(): void {
    this.sharedService.login.subscribe(result => {
      this.isLoggedIn = result;
    });
  }
  logout(): void {
    this.sharedService.changeLoginStatus(false);
    this.router.navigate(['login']);
  }
}
