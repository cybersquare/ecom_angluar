import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private httpclient:HttpClient ) { }
  inactiveResellers(){
    return this.httpclient.get<any>("http://cs-ecom.herokuapp.com/common/ResellersApproval");
  }

  UpdateResellerRequest(reseller: any){
    return this.httpclient.put<any>("http://cs-ecom.herokuapp.com/common/resellerVerification",reseller);
  }

  AllResellers(){
    return this.httpclient.get<any>("http://cs-ecom.herokuapp.com/common/AngAllResellers");
  }

  Adminlogin(adminuser: any){
    return this.httpclient.post<any>("http://cs-ecom.herokuapp.com/common/AngAdminLogin",adminuser);
  }
  
  public isAuthenticated(): boolean {
    return !!sessionStorage.getItem('adminid');
  }
}