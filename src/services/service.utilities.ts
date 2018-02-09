import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UtilitiesService {

  resource: any[] = [];

  constructor(public httpClient: HttpClient) { }

  cleanParams(params){
    let tempparams = {};
    for (let param in params) {
      if (params[param])
        tempparams[param] = params[param];
    }
    console.log(tempparams);
    return tempparams;
  }

}
