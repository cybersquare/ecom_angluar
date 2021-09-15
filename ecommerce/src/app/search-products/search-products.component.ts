import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  constructor(private commonservice: CommonService) { }
  searchProd: any;
  ngOnInit(): void {
    this.searchProd=this.commonservice.sharedSearchProductList
    console.log(this.searchProd);
    // this.commonservice.sharedSearchProductList= undefined;
  }
  typesOfShoes: string[] = ['Filter', 'Sort', 'Compare'];

  addToCar(id: string){
    console.log(id);
  }
}