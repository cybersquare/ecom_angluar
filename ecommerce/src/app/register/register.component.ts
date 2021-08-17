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
  cOtp = "";
  rOtp = "";
  rRegSpinner = false;
  cRegSpinner = false;
  userid_for_verification=""
  
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
      
      if(res.status == "Registeration successfull"){
        this.regScreen = false;
        this.cOtp = res.otp;
        this.userid_for_verification = res.id;
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
    
    let resell=resellerRegForm.value;
    this.rRegSpinner = true;
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

      if(res.status == "Registeration successfull"){
        this.resllerRegScreen = false;
        this.rOtp = res.otp;
        this.userid_for_verification = res.id;
      } 
      else{
        this._snackBar.open(res.status, 'Close', {
          duration: 3000
        });
      }
      this.rRegSpinner = false;

    });
    this.rRegSpinner = false;
  }

  // Customer OTP verification
  customerOtpVerificiation(customer_otp:any){

    console.log(customer_otp.value);
    console.log(this.userid_for_verification);
    if(this.cOtp == customer_otp.value){
      this.regServ.verifyOtp(this.userid_for_verification).subscribe(res=>{
        console.log(res);
        if(res.status=="OTP verified successfully"){
          // localStorage.setItem("username", this.cReg.email);
          // localStorage.setItem("userType", "customer");
          this._snackBar.open("Registarion complete", 'Close', {
          duration: 3000});
          // Navigate to login page after successful verification of OTP
          this._router.navigate(['/login']);
        }
      });
    }
    else{
      console.log("Invlaid OTP");
    }
  }
    
    // Reseller OTP verification
  resellerOtpVerificiation(reseller_otp:any){
      console.log(reseller_otp.value);
      if(this.rOtp == reseller_otp.value){
        // Update OTP verification on server
        this.regServ.verifyOtp(this.userid_for_verification).subscribe(res=>{
          console.log(res);
          if(res.status=="OTP verified successfully"){
            // localStorage.setItem("username", this.rReg.email);
            // localStorage.setItem("userType", "reseller")
            this._snackBar.open("Reseller registarion complete", 'Close', {
            duration: 3000});
          // Navigate to login page after successful verification of OTP
          this._router.navigate(['/login']);
        }
        });
      }
      else{
        console.log("Invlaid OTP")
      }
  }
}
