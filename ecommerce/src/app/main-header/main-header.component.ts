import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BroadcastService } from '../services/broadcast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements  OnInit {
  @Input()
  deviceXs: boolean = false;

  loginStatus$! : Observable<boolean>;
  username$! : Observable<string>
  userType$! : Observable<string>
  username=localStorage.getItem('username');

  constructor(private authService: AuthService,
    private _router:Router,
    private brodcastService:BroadcastService){
      // Subscribe to broadcast service to change the menu at top left depending on login status
    this.brodcastService.subscribe("LOGGEDIN", () => {
      this.username=localStorage.getItem('username');
      this.loginStatus$ = this.authService.isLoggedIn();
    });
   
  }
  
  ngOnInit(): void {
    this.loginStatus$ = this.authService.isLoggedIn()
  }
  onLogout(){
    this.authService.logout();
  }
  viewProfile(){
    if(localStorage.getItem("customerType")=="customer"){
      this._router.navigate(['/view-profile']);
    }
    else if(localStorage.getItem("customerType")=="reseller"){
      this._router.navigate(['/view-profile']);
    }
  }

  viewCart(){
    this._router.navigate(['/customer/ViewCart']);
  }

  viewOrder(){
    this._router.navigate(['/customer/ViewOrder'])
  }
}
