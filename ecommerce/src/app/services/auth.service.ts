import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  loggedIn(){
    // Double negation will return ture if it is existing otherwise false
    return !!localStorage.getItem("username");
  }
  
}
