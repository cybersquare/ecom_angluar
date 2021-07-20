import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private geturl = 'https://restcountries.eu/rest/v2/name/united';
  constructor(private httpclient:HttpClient) { }

  registerCustomer(test:any){
    return this.httpclient.get(this.geturl);
  }
}
