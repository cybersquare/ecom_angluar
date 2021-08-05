import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCustomer } from '../register/register.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private geturl = 'https://restcountries.eu/rest/v2/name/united';
  private signupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private loginUrl = "";

  constructor(private httpclient:HttpClient) { }

  registerCustomer(reg:RegisterCustomer){
    console.log("in service");
    console.log(reg);
    return this.httpclient.post<any>(this.signupUrl, reg);
  }
}
