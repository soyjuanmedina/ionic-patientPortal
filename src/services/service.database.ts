import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatabaseService {

  resource: any[] = [];

  constructor(public httpClient: HttpClient) { }

  getResource(term: string, params?: Object) {
    let url = `/patient-portal/rest/resource/${term}`;

    return this.httpClient.get(url, { params: params })
      .map((resp: any) => {
        this.resource = resp.result;
        return this.resource;
      });
  }

}
