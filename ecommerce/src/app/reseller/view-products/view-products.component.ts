import { Component, OnInit } from '@angular/core';
import { Product, DeleteProduct } from './product.model';
import { ResellerService } from '../../services/reseller.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateProductComponent } from '../update-product/update-product.component';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  constructor(private service: ResellerService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }
  public product = new Product()
  ngOnInit(): void {
    this.getProductdata()
  }
 //View all products
  products:any
  productObj:any
  getProductdata(){
    this.product.id = localStorage.getItem("userid");
    console.log("Product details loading");
    console.log(this.product)
    this.service.ViewProduct(this.product).subscribe((res: any)=>{
      this.products = res
      console.log(this.products)
      console.log("got sresponse") 
    });
  }
//Delete a product
  delete = new DeleteProduct();
  result:any;
  deleteProduct(id:any){
    //Confirm whether reseller want to delete the product
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'yes',
          cancel: 'No'
        }
      }
    });
    //The product delete only if the reseller click yes on confirm box
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.delete.product_id = id;
        //Call the service to delete the product
        this.service.DeleteProduct(this.delete).subscribe((resp: any)=>{
          this.getProductdata();
          console.log(resp.msg)
          this.result = resp.msg;
          //Notify the reseller that the product is deleted
          if (this.result =="The product deleted") {
            this.snackBar.open('Product deleted', 'OK', {
              duration: 2000,
            });
          }
        });
      }
    });
    
  }
  openProductDialog(productId:any,title:any,desc:any, price:any, quantity:any,status:any){
   
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: { 
        prodId: productId,
        prodTitle: title,
        prodDesc: desc,
        prodPrice: price,
        prodQuantity: quantity,
        prodStatus: status
        
       }
    });   
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
         this.getProductdata()
      }
    });
    
  }
}
