import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCustomer } from '../register/register-cust.model';
import { RegisterReseller } from '../register/register-reselller.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private geturl = 'https://restcountries.eu/rest/v2/name/united';
  private customerSignupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private resellerSignupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private loginUrl = "";
  private custOtpVerify = "https://cs-ecom.herokuapp.com/common/otpVerify"
  constructor(private httpclient:HttpClient) { }

  registerCustomer(reg:RegisterCustomer){
    console.log("in service");
    console.log(reg);
    return this.httpclient.post<any>(this.customerSignupUrl, reg);
  }

  registerReseller(reg:RegisterReseller){
    console.log("in service");
    console.log(reg);
    return this.httpclient.post<any>(this.resellerSignupUrl, reg);
  }


}
