import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://cs-ecom.herokuapp.com/common/";
  // url="http://localhost:8000/common/";
  constructor( private httpclient:HttpClient ) { }
  inactiveResellers(){
    return this.httpclient.get<any>(this.url+"ResellersApproval");
  }

  UpdateResellerRequest(reseller: any){
    return this.httpclient.put<any>(this.url+"resellerVerification",reseller);
  }

  AllResellers(){
    return this.httpclient.get<any>(this.url+"AngAllResellers");
  }

  Adminlogin(adminuser: any){
    return this.httpclient.post<any>(this.url+"AngAdminLogin",adminuser);
  }
  
  public isAuthenticated(): boolean {
    return !!localStorage.getItem('adminid');
  }

  testobservable():Observable<HttpResponse<any>>{
    return this.httpclient.get<any>(this.url+"ResellersApproval", { observe: 'response' });
  }
}