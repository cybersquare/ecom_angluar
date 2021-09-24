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
  public userName: any='';
  public userAddress: any='';
  public userCountry: any='';
  public userMobile: any='';
  public user: any='';
  editInstance:any
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    private service: CommonService,
    private _snackBar: MatSnackBar,
  ) {
    if (data) {
      console.log("inside edti profile com:",data.userObj)
      this.user = data.userObj
      this.userName = this.user.Rname;
      this.userAddress = this.user.address;
      this.userCountry = this.user.country;
      this.userMobile = this.user.mobile;
      console.log(this.userCountry)
      this.editInstance = new editProfile(this.userName,this.userAddress,this.userCountry,this.userMobile);
      console.log(this.editInstance)
      // console.log(this.updateInstance)
      // console.log(updateInstance)
         }
   
   }

  ngOnInit(): void {
  }
edit(){

}
}
