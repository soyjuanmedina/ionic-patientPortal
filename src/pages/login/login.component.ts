import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemJsNgModuleLoaderConfig } from '@angular/core/src/linker/system_js_ng_module_factory_loader';

//Services
import { UserService } from '../../services/index.services';

//Interfaces
import { Loginterms } from '../../interfaces/index.interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginterms: Loginterms = {
    user: '',
    password: '',
  };

  loginUser = false;

  constructor(public _userService: UserService) { }

  goLogin(loginterms: Loginterms) {
    this._userService.goLogin(loginterms);
  }

}
