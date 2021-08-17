import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../services/common.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css']
})
export class OtpVerifyComponent implements OnInit {
otp="";
userid_for_verification="";
customerType = "";
username = ""
  constructor(public dialogBox:MatDialogRef<OtpVerifyComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private _snackBar: MatSnackBar,
    private loginServ:CommonService,
    private _router:Router) { 
      this.otp = data.otp;
      this.userid_for_verification = data.id;
      this.customerType = data.customerType;
      this.username = data.username;

    }

  ngOnInit(): void {
    console.log(this.otp);

  }

  onClose(){

    this.dialogBox.close()
  }
// Customer OTP verification
  customerOtpVerificiation(customer_otp:any){
    console.log("Otp verification in progress")

    console.log(this.otp);
    console.log(this.userid_for_verification);
    if(this.otp == customer_otp.value){
      this.loginServ.verifyOtp(this.userid_for_verification).subscribe(res=>{
        console.log(res);
        if(res.status=="OTP verified successfully"){
          localStorage.setItem("username", this.username);
          localStorage.setItem("userType", this.customerType);
          localStorage.setItem("userid", this.userid_for_verification);
          // Show message to customer 
          this._snackBar.open("Otp verification complete", 'Close', {
          duration: 3000});
          if(this.customerType=="customer"){
            //go to customer module
            this._router.navigate(['/customer']);
          }
          else if(this.customerType=="reseller"){
            // go to reseller module
            this._router.navigate(['/reseller']);
          }
          this.dialogBox.close()
        }
        else{
          this._snackBar.open("Otp verification failed", 'Close', {
            duration: 3000});

        }
      });
    }
    else{
      console.log("Invlaid OTP");
    }
  }
}
