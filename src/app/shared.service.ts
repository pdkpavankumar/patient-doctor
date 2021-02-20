import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private loginSource = new BehaviorSubject<boolean>(false);
  login = this.loginSource.asObservable();

  constructor() { }

  changeLoginStatus(loginStatus: boolean): void {
    this.loginSource.next(loginStatus);
  }
}
