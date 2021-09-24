import { Component, OnInit, Input } from '@angular/core';
import { Login } from './login.model';
import { NgForm } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { OtpVerifyComponent } from '../otp-verify/otp-verify.component';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BroadcastService } from '../services/broadcast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() deviceXs: boolean = false;
 
  login = new Login();
  constructor(private loginServ:CommonService,
    private dialog:MatDialog, 
    private _snackBar: MatSnackBar,
    private _router:Router,
    private boradcastService:BroadcastService) { }

  ngOnInit(): void {}

// Login function
  userLogin(loginForm:NgForm) {
    console.log(loginForm.value)
    this.login.username= loginForm.value.username;
    this.login.password= loginForm.value.usrPassword;
    console.log(this.login);
    this.loginServ.userLogin(this.login).subscribe(res =>{

      console.log("this my login",res);

      if(res.status=="Login successful"){
        console.log("login success")
        localStorage.setItem("username", loginForm.value.username);
        localStorage.setItem("customerType", res.customerType);
        localStorage.setItem("userid", res.id);
        this.boradcastService.boradcast("LOGGEDIN"); // Notify main header to change items in the menu
        // Redirect to the page accoring the user role
        if(res.customerType=="customer"){
          this._router.navigate(['/customer']);
        }
        else if(res.customerType=="reseller"){
          this._router.navigate(['/reseller']);
        }

      }
      else if(res.status=="OTP not verified"){ // Show OTP verification screen

        console.log("show window")
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {"otp": res.otp,"id":res.id, 
                            "username":loginForm.value.username, "customerType": res.customerType };
        this.dialog.open(OtpVerifyComponent, dialogConfig);
      }
      else if(res.status=="Login Failed"){//Show message login failed
        this._snackBar.open("Please check your username and password", 'Close', {duration: 3000});
      }
    });


  }
}
