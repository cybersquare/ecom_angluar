import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { CustomerserviceService } from '../services/customerservice.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private commonservice: CommonService, 
    private customerservice: CustomerserviceService,
    private _snackBar: MatSnackBar) { }
  cartBTN:  boolean | undefined
  ngOnInit(): void {
    this.getProductDetails()
    this.cartBTN=true
  }
  starRating = 0; 
  currentRate = 6;
  faoRate=4;
  price=300;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  quantity=1;
  productdata: any;

  getProductDetails(){
    // let prodId= this.commonservice.productViewId
    this.commonservice.customerViewProducts().subscribe(res=>{
      console.log("View product successfully");
      this.productdata=res.body;
      console.log(this.productdata);
    })
  }

  addToCart(){
    if (localStorage.getItem("username") === null || localStorage.getItem("userid") === null || localStorage.getItem("customerType") != "customer") {
      this.openSnackBar("Please login before adding to cart");
    }
    else{
      let customerid=localStorage.getItem("userid")
      let dataset={"prodid": this.productdata.prodid,"quantity": this.quantity,"customerid": customerid }
      this.customerservice.prodAddToCart(dataset).subscribe(res=>{
        console.log(res)
        if(res.status == 200){
          this.openSnackBar("Product added to cart");
          this.cartBTN=false
        }
        else{
          this.openSnackBar("Something went wrong");
        }
      })
    }
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBar(msg: any) {
    this._snackBar.open(msg, 'Cancel', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
