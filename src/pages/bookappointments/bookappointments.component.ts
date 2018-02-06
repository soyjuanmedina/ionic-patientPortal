import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemJsNgModuleLoaderConfig } from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Alertas
import { AlertController } from 'ionic-angular';

//Services
import { DatabaseService } from '../../services/service.database';

//Páginas
import { FreeslotsComponent } from '../freeslots/freeslots.component';

interface Searchterms {
  hospitalId: string,
  payorId: string,
  orgId: string,
  treatmentId: string,
  doctorId: string,
  specialtyId: string,
  visitTypeId: string,
  schedule: string,
  date: string,
}

@Component({
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
})
export class BookappointmentsComponent {

  searchterms: Searchterms = {
    hospitalId: null,
    payorId: null,
    orgId: null,
    treatmentId: null,
    doctorId: null,
    specialtyId: null,
    visitTypeId: null,
    schedule: null,
    date: '2018-02-02',
  };

  hospitals: any[];
  payors: any[];
  departments: any[];
  doctors: any[];
  specialties: any[];
  visitTypes: any[];


  constructor(public _databaseService: DatabaseService,
              public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams) {

    this._databaseService.getResource('hospitals').subscribe(response => {
      this.hospitals = response;
      if (this.hospitals.length == 1) {
        this.searchterms.hospitalId = this.hospitals[0].id;
      }
    });

    

    this._databaseService.getResource('payors').subscribe(response => {
      this.payors = response;
    });

    this._databaseService.getResource('departments').subscribe(response => {
      this.departments = response;
    });

  }

   checkDepartment(){
     if (this.searchterms.orgId == '1LDSSP') {
      this.showAlert();
    } else{
      this.searchDoctors();
      this.searchvisitType();
      this.searchSpecialties();
    }
  }

  searchDoctors () {
    var params = {
      payorId: this.searchterms.payorId,
      orgId: this.searchterms.orgId,
      specialtyId: this.searchterms.specialtyId,
      treatmentId: this.searchterms.treatmentId,
    };

    this._databaseService.getResource('doctors', params).subscribe(response => {
      this.doctors = response;
    });

  }

  searchvisitType(){
    let treatmentId = '';
    let params = {
      hospitalId: this.searchterms.hospitalId,
      treatmentId: this.searchterms.treatmentId,
    };
    this._databaseService.getResource('visitTypes', params).subscribe(response => {
      this.visitTypes = response;
    });
  }

  searchSpecialties() {
    var params = {
      doctorId: this.searchterms.doctorId,
      treatmentId: this.searchterms.treatmentId,
    };

    this._databaseService.getResource('specialties', params).subscribe(response => {
      this.specialties = response;
    });
  }

  showAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Spine protocol',
      message: 'Spine appointment booking process start',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  goToFreeSlots(searchterms:Searchterms){
    console.log(searchterms);
    this.navCtrl.push(FreeslotsComponent, { searchterms });

  }

}
