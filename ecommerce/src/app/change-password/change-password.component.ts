import { Component, OnInit } from '@angular/core';
import { ChangePassword } from './change-password.model';
import { CommonService } from '../services/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service:CommonService,private _snackBar: MatSnackBar, private authService: AuthService, private _router:Router,) { }

  ngOnInit(): void {
  }
//Change password
changepassword = new ChangePassword();
changePassword(){
  console.log(this.changepassword)
  this.changepassword.usrname = localStorage.getItem("username");
  this.service.changePassword(this.changepassword).subscribe((res: any)=>{
    console.log(res)
  if (res.message=='Your password changed successfully') {
    this._snackBar.open("Password updated successfully", 'Close', {duration: 3500,  verticalPosition: 'top'});
    //Logout and and redirected to login screen when user changes the password
    this.authService.logout();
    this._router.navigate(['/login']);
  }
  else{
    this._snackBar.open("Your password is incorrect", 'Close', {duration: 3500,  verticalPosition: 'top'});
  }
  });
}
}
