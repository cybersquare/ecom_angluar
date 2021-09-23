import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  constructor(private commonservice: CommonService, private _router: Router) { }
  searchProd: any;
  ngOnInit(): void {
    this.searchProd=this.commonservice.sharedSearchProductList
    console.log(this.searchProd);
    // this.commonservice.sharedSearchProductList= undefined;
  }
  typesOfShoes: string[] = ['Filter', 'Sort', 'Compare'];

  viewProduct(id: string){
    this.commonservice.productViewId=id;
    this._router.navigate(['/ViewProduct'])
  }
}