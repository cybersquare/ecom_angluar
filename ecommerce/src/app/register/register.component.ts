import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RegisterCustomer } from './register-cust.model'
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RegisterReseller } from './register-reselller.model'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  regScreen=true;
  resllerRegScreen=true;
  cOtp = 0;
  rOtp = 0;
  rRegSpinner = false;
  cRegSpinner = false;
  
  constructor(private regServ:CommonService, 
    private datePipe: DatePipe, 
    private _snackBar: MatSnackBar,
    private _router:Router) { }
 
  ngOnInit(): void {
  }
  cReg = new RegisterCustomer();
  rReg = new RegisterReseller();


  // Customer registration
  registerCustomer(custRegForm:NgForm){
    console.log(custRegForm.value);
    let cust=custRegForm.value;
    console.log(cust.fname);
    this.cRegSpinner = true;
    this.cReg.firstname = cust.fname;
    this.cReg.lastname = cust.lname;
    this.cReg.gender = cust.gender;
    this.cReg.mobile = cust.phone;
    this.cReg.password = cust.password;
    this.cReg.email = cust.email;
    this.cReg.usertype = 'customer';
    this.cReg.address = cust.address;
    this.cReg.country = cust.country;
    this.cReg.dateofbirth = this.datePipe.transform(cust.dob,"yyyy-MM-dd");
    this.regServ.registerCustomer(this.cReg).subscribe(res =>{
      console.log(res);
      
      if(res.status == "Registreration successfull"){
        this.regScreen = false;
        this.cOtp = res.otp
      } 
      else{
        this._snackBar.open(res.status, 'Close', {
          duration: 3000
        });
      }
      this.cRegSpinner = false;
    },
    stat=>{
      console.log(stat);
    });
  }
// Reseller registation
  registerReseller(resellerRegForm:NgForm){
    this.resllerRegScreen = false;
    let resell=resellerRegForm.value;

    this.rReg.resellercompanyname = resell.companyName;
    this.rReg.resellercompanyid = resell.companyId;
    this.rReg.resellerbankaccountname = resell.accountName;
    this.rReg.resellerbankaccountnumber = resell.accountNumber;
    this.rReg.resellerbankaccountifsc = resell.ifsc;
    this.rReg.usertype = 'reseller';
    this.rReg.address = resell.resellerAddress;
    this.rReg.country = resell.resellerCountry;
    this.rReg.mobile = resell.resellerMobile;
    this.rReg.email = resell.resellerEmail;
    this.rReg.password = resell.resellerPassword;

    this.regServ.registerReseller(this.rReg).subscribe(res=>{
      console.log(res);
    });

  }

  // Customer OTP verification
  customerOtpVerificiation(){
    localStorage.setItem("username", this.cReg.email);
    localStorage.setItem("userType", "customer")
    this._snackBar.open("Registarion complete", 'Close', {
      duration: 5000
    });
    this._router.navigate(['/login']);
  }

    // Reseller OTP verification
  resellerOtpVerificiation(){
      localStorage.setItem("username", this.rReg.email);
      localStorage.setItem("userType", "reseller")
      this._snackBar.open("Reseller registarion complete", 'Close', {
        duration: 3000
      });

  }




}
