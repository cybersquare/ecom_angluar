import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from '../services/common.service';
import { editProfile } from './edit-profile.model';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  public userFirstname: any='';
  public userLastname: any='';
  public userAddress: any='';
  public userCountry: any='';
  public userMobile: any='';
  public userId = localStorage.getItem("userid");
  public userType = localStorage.getItem("customerType");
  public user: any='';
  editInstance:any;
  isCustomer=false;
  isReseller=false;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    private service: CommonService,
    private _snackBar: MatSnackBar,
  ) {
    if (data) {
      console.log("inside edti profile com:",data.userObj)
      this.user = data.userObj
      if (this.user.usertype=="reseller") {
        this.isReseller=true;
        this.userFirstname = this.user.Rname;
      }
      else{
        this.isCustomer=true;
        this.userFirstname=this.user.fname;
        this.userLastname=this.user.lname;
      }
      this.userAddress = this.user.address;
      this.userCountry = this.user.country;
      this.userMobile = this.user.mobile;
      console.log(this.userCountry)
      this.editInstance = new editProfile(this.userFirstname,this.userLastname,this.userAddress,this.userCountry,this.userMobile,this.userId,this.userType);
      console.log(this.editInstance);

         }
   }

  ngOnInit(): void {
  }
edit(){
this.service.EditProfile(this.editInstance).subscribe((respon: any)=>{
      // this.getProductdata();
    console.log(respon.msg)
    if (respon.msg=="Profile updated") {
      this._snackBar.open("Profile udated successfully", 'Close', {duration: 3500,  verticalPosition: 'top'});
      this.dialogRef.close(true);
      
    }
    else{
      this._snackBar.open("Something went wrong", 'Close', {duration: 3500,  verticalPosition: 'top'});
      this.dialogRef.close(true);
    }
    });
    
}
}
