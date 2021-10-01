import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RegisterCustomer } from '../register/register-cust.model';
import { RegisterReseller } from '../register/register-reselller.model';
import { Login } from '../login/login.model';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private URL = 'http://cs-ecom.herokuapp.com/common/';
  private customerSignupUrl = 'http://cs-ecom.herokuapp.com/common/Ang_Signup';
  private resellerSignupUrl = 'http://localhost:8000/common/Ang_Signup';
  private loginUrl = "https://cs-ecom.herokuapp.com/common/Ang_Login";
  private verifyOtpUrl = "https://cs-ecom.herokuapp.com/common/otpVerify"
  // private loginUrl = "";
  // private custOtpVerify = "https://cs-ecom.herokuapp.com/common/otpVerify";
  private resellerViewProdURL="http://cs-ecom.herokuapp.com/common/GetResProducts";
  productViewId: string="";
  sharedSearchProductList : any;

  
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
  ViewProfile(user: any){
    console.log('working');
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/Profiledetails',user);
  }
  EditProfile(user: any){
    console.log('working');
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/AngEditProfile',user);
  }

  searchProduct(srchdata: any):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(this.URL+"searchProducts", srchdata, { observe: 'response' });
  }

  customerViewProducts():Observable<HttpResponse<any>>{
    let data={'productid': this.productViewId }
    return this.httpclient.post<any>(this.URL+"ProductView", data, { observe: 'response' })
  }
  changePassword(data:any){
    console.log("working");
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/changePassword',data);
  }
  allProducts(){
    console.log("working");
    return this.httpclient.get('https://cs-ecom.herokuapp.com/common/Ang_AllProducts');
  }
  
}
