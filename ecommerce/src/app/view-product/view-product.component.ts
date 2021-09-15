import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
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
  updtQunty(){
    console.log(typeof(this.quantity))
    if(this.quantity<1){
      console.log("testtt");
      this.quantity=1;
    }
  }
}
