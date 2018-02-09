import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemJsNgModuleLoaderConfig } from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import { IonicPage, NavController, NavParams, AlertController, LoadingController   } from 'ionic-angular';

//Services
import { DatabaseService, UtilitiesService} from '../../services/index.services';


@Component({
  selector: 'app-login',
  templateUrl: './freeslots.component.html',
})
export class FreeslotsComponent {

  searchterms: any = {};
  freeslots: any[];
  alert: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _databaseService: DatabaseService,
    public _utilitiesService: UtilitiesService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) { 

    this.searchterms = this.navParams.get("searchterms");

    this.searchFreeSlots();

  }

  searchFreeSlots() {

      let loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 1000
      });
      loader.present();
    
    let params = this._utilitiesService.cleanParams(this.searchterms);

    this._databaseService.getResource('freeslots', params).subscribe(response => {
      if (typeof response === 'string'){
        console.log(response);
        this.showAlert(response);
      }else{
        console.log(typeof(response));
        this.freeslots = response;
      }
    });
  }

  bookFreeslot(freeslot){
    console.log(freeslot);
  }

  showAlert(text:string) {
    let alert = this.alertCtrl.create({
      title: 'No Free slots',
      subTitle: text,
      buttons: [
        {
          text: 'Search again',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }


}
