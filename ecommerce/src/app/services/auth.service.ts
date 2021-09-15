import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router:Router) { }
  loggedIn(){
    // Double negation will return ture if it is existing otherwise false
    return !!localStorage.getItem("username");
  }
  
  private loginStatus = new BehaviorSubject<boolean>(false);
  // private username = new BehaviorSubject<string>(localStorage.getItem("username")||"");
  // private userRole = new BehaviorSubject<string>(localStorage.getItem("customerType")||"")

  logout(){ // Logout function
    // Remove all items from loacal storage
    this.loginStatus.next(false);
    localStorage.removeItem("username");
    localStorage.removeItem("customerType");
    localStorage.removeItem("userid");
    // Navigate to homepage
    this._router.navigate(['/']);
  } 

  isLoggedIn()  {
    let user: string = localStorage.getItem("username")||"";
    let type :string = localStorage.getItem("customerType")||"";
    if(user!="" && type!=""){
      this.loginStatus.next(true);
    }
     return this.loginStatus.asObservable(); 
  }
}
