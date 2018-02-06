import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemJsNgModuleLoaderConfig } from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Services
import { DatabaseService } from '../../services/service.database';


@Component({
  selector: 'app-login',
  templateUrl: './freeslots.component.html',
})
export class FreeslotsComponent {

  searchterms: any = {};

  freeslots: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _databaseService: DatabaseService) { 

    this.searchterms = this.navParams.get("searchterms");

    this.searchFreeSlots();

  }

  searchFreeSlots() {
    let params = {};
    for (let param in this.searchterms) {
      if (this.searchterms[param])
        params[param] = this.searchterms[param];
    }

    this._databaseService.getResource('freeslots', params).subscribe(response => {
      this.freeslots = response;
      console.log(this.freeslots);
    });
  }

  bookFreeslot(freeslot){
    console.log(freeslot);
  }

}
