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

}
