import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminLoginModel } from './adminloginmodel';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BroadcastService } from 'src/app/services/broadcast.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminservice: AdminService, 
    private router: Router, 
    private _snackBar: MatSnackBar,
    private broadcastService: BroadcastService ) { }
  ngOnInit(): void {
  }
  login = new AdminLoginModel();

  loginForm = new FormGroup({
    adminUsername : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    adminPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ])
  })

  get adminusername(){
    return this.loginForm.get('adminUsername');
  }

  get adminpassword(){
    return this.loginForm.get('adminPassword');
  }
  admLogin(){
    // this.login.user=this.loginForm.adminUser
    this.login.user=this.adminusername?.value
    this.login.password=this.adminpassword?.value
    this.adminservice.Adminlogin(this.login).subscribe(res=>{
      if(res.status == "success"){
        console.log(res)
        localStorage.setItem('userid',res.adminid)
        localStorage.setItem('username',"administrator")
        localStorage.setItem("customerType", 'admin');
        this.broadcastService.boradcast("LOGGEDIN");
        this.router.navigate(['/admin/ManageResellers'])

      }
      else{
        console.log("Login Failed")
        this.openSnackBar();
      }
    })
  }
  openSnackBar() {
    this._snackBar.open("Login failed... Please check your credentials", "Cancel");
  }
}
