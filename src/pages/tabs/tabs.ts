import { Component } from '@angular/core';

import { BookappointmentsComponent } from '../bookappointments/bookappointments.component';
import { MyappointmentsPage } from '../myappointments/myappointments';

//Services
import { UserService } from '../../services/index.services';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookappointmentsComponent;
  tab2Root = MyappointmentsPage;

  user = false;

  constructor(public _userService: UserService) {
    console.log("Dentro de consturctor");
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log("Dentro de ionViewDidLoad");
  }


}
