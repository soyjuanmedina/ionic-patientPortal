import { Component } from '@angular/core';

import { LoginComponent } from '../login/login.component';
import { BookappointmentsComponent } from '../bookappointments/bookappointments.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookappointmentsComponent;
  tab2Root = LoginComponent;

  constructor() {

  }
}
