import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { User } from '../common-models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: CommonService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ) { }
  user = new User()
  result :any
  public isReseller = false;
  public isCustomer = false;
  ngOnInit(): void {
    this.userDetails()
  }
  userDetails(){
    this.user.id = localStorage.getItem("userid")
    this.user.usertype = localStorage.getItem("customerType")
    if (this.user.usertype =="reseller") {
      this.isReseller = true;
    }
    else{
      this.isCustomer = true;
    }
    this.service.ViewProfile(this.user).subscribe((res: any)=>{
      this.result = res
      console.log(this.result)
      console.log("got sresponse") 
    });
  }
  editProfileDialog(){
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: { 
        userObj : this.result
       }
    });   
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
       
      }
    });
  }
}
