import { Component, ElementRef, Input, ViewChild,} from '@angular/core';
import { CommonService } from '../services/common.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent  {
  constructor(private commonservice: CommonService, 
    private _snackBar: MatSnackBar,
    private _router:Router,){}
  @Input() deviceXs: boolean = false;;
  topVal = 0;
  onScroll(e:any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
  productList: any;
  search : string ="";
  searchProduct(){
    if(this.search.length >= 3){
      let data={"searchdata": this.search}
      this.commonservice.searchProduct(data).subscribe(res=>{
        // console.log(res)
        if(res.status==200){
          this.productList=res.body
          this.commonservice.sharedSearchProductList=this.productList;
          this._router.navigate(['/ProductSearch']);
        }
        else{
          console.log("no contents")
          this.openSnackBar()
        }
      })
    }
  }

  // openSnackBar() {
  //   this._snackBar.open("No products available", "Dismiss",{
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,

  //   });
  // }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBar() {
    this._snackBar.open("No products available", "Dismiss", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
