import { Component } from '@angular/core';

import { BookappointmentsComponent } from '../bookappointments/bookappointments.component';
import { LoginComponent } from '../login/login.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookappointmentsComponent;
  tab2Root = LoginComponent;

  constructor() {

  }
}
