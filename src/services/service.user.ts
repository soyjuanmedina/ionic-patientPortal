import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  loginUser = false;

  constructor() { }

  goLogin(loginterms) {
    if (loginterms.user == '1' && loginterms.password == '1') {
      this.loginUser = true;
    }
    console.log(this.loginUser);
  }

}
