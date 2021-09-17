import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ResellerService } from '../../services/reseller.service';


@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  constructor(private service: ResellerService) { }
  product = new Product()
  ngOnInit(): void {
    this.getProductdata()
  }
  products:any
  productObj:any
  getProductdata(){
    this.product.id = "1";
    console.log("Product details loading");
    console.log(this.product)
    this.service.ViewProduct(this.product.id).subscribe((res: any)=>{
      this.products = res
      console.log(this.products)
      console.log("got sresponse") 
    });
  }
}
