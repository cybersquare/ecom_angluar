import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { BroadcastService } from '../services/broadcast.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
// export class MainHeaderComponent  {

//   @Input() deviceXs : boolean;

// }

export class MainHeaderComponent implements  OnInit {
  @Input()
  deviceXs: boolean = false;

  loginStatus$! : Observable<boolean>;
  username$! : Observable<string>
  userType$! : Observable<string>
  username=localStorage.getItem('username');

  constructor(private authService: AuthService,
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
}
