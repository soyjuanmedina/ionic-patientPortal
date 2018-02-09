import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

// Angular propios
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Services
import { DatabaseService, UserService, UtilitiesService } from '../services/index.services';

// Componentes
import { BookappointmentsComponent } from '../pages/bookappointments/bookappointments.component';
import { LoginComponent } from '../pages/login/login.component';
import { FreeslotsComponent } from '../pages/freeslots/freeslots.component';
import { MyappointmentsPage } from '../pages/myappointments/myappointments';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    BookappointmentsComponent,
    LoginComponent,
    FreeslotsComponent,
    MyappointmentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    BookappointmentsComponent,
    LoginComponent,
    FreeslotsComponent,
    MyappointmentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatabaseService,
    UserService,
    UtilitiesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
