import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterCustomer } from '../register/register-cust.model';
import { RegisterReseller } from '../register/register-reselller.model';
import { Login } from '../login/login.model';
import { ResellerProduct } from '../reseller/view-products/viewProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private geturl = 'https://restcountries.eu/rest/v2/name/united';
  private customerSignupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private resellerSignupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private loginUrl = "https://cs-ecom.herokuapp.com/common/Ang_Login";
  private verifyOtpUrl = "https://cs-ecom.herokuapp.com/common/otpVerify"
  // private loginUrl = "";
  // private custOtpVerify = "https://cs-ecom.herokuapp.com/common/otpVerify";
  private resellerViewProdURL="http://cs-ecom.herokuapp.com/common/GetResProducts";
  constructor(private httpclient:HttpClient) { }

  registerCustomer(reg:RegisterCustomer){
    console.log("in service - Register customer");
    // console.log(reg);
    return this.httpclient.post<any>(this.customerSignupUrl, reg);
  }

  registerReseller(reg:RegisterReseller){
    console.log("in service - Register reseller");
    // console.log(reg);
    return this.httpclient.post<any>(this.resellerSignupUrl, reg);
  }

  verifyOtp(userid:string){
    return this.httpclient.post<any>(this.verifyOtpUrl, {"userid":userid});
  }

  userLogin(login:Login){
    console.log("in service - User login");
    return this.httpclient.post<any>(this.loginUrl, login);
  }
  resellerViewproduct(resdata: ResellerProduct){
    return this.httpclient.post<any>(this.resellerViewProdURL, resdata);
  }

  
}
