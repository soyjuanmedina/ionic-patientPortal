import { Component } from '@angular/core';

import { BookappointmentsComponent } from '../bookappointments/bookappointments.component';
import { LoginComponent } from '../login/login.component';
import { FreeslotsComponent } from '../freeslots/freeslots.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BookappointmentsComponent;
  tab2Root = FreeslotsComponent;
  tab3Root = LoginComponent; 

  constructor() {

  }
}
