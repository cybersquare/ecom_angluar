import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateProduct } from './update-product.model';
import { ResellerService } from 'src/app/services/reseller.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ViewProductsComponent } from '../view-products/view-products.component';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public prodId: any='';
  public prodTitle:any='';
  public prodDesc: any='';
  public prodPrice : any='';
  public prodQuantity : any='';
  public prodStatus : any='';
  public updateInstance:any; 
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<UpdateProductComponent>,
    private service: ResellerService,
    private _snackBar: MatSnackBar,
    
  ) {
    if (data) {
      this.prodId = data.prodId;
      this.prodTitle = data.prodTitle;
      this.prodDesc = data.prodDesc;
      this.prodPrice = data.prodPrice;
      this.prodQuantity = data.prodQuantity;
      this.prodStatus = data.prodStatus;
      this.updateInstance = new UpdateProduct(this.prodId,this.prodTitle,this.prodDesc,this.prodPrice,this.prodQuantity,this.prodStatus);
      console.log(this.updateInstance)
      // console.log(updateInstance)
         }
   }
  
   update(){
    this.service.UpdateProduct(this.updateInstance).subscribe((respon: any)=>{
      // this.getProductdata();
      console.log(respon.msg)
    if (respon.msg=="The product updated successfully") {
      this._snackBar.open("Product udated successfully", 'Close', {duration: 3500,  verticalPosition: 'top'});
      this.dialogRef.close(true);
      
    }
    else{
      this._snackBar.open("Something went wrong", 'Close', {duration: 3500,  verticalPosition: 'top'});
      this.dialogRef.close(true);
    }
    });
  }
  
   
  ngOnInit(): void {
  }

}
