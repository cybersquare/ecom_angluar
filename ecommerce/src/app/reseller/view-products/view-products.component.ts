import { Component, OnInit } from '@angular/core';
import { ResellerProduct } from './viewProduct.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private comservice:CommonService) { }
  Rproducts = new ResellerProduct();
  ngOnInit(): void {
    this.getProductdata()
  }
  getProductdata(){
    this.Rproducts.id = "2";
    console.log("Product details loading");
    this.comservice.resellerViewproduct(this.Rproducts).subscribe((res: any)=>{
      console.log("got sresponse")
      console.log(res);
    })
  }
}
