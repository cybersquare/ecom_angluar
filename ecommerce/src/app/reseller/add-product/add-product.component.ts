import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  onFileChanged(event:any) {
    const file = event.target.files[0]
  }
 
  constructor() { }

  ngOnInit(): void {
    console.log('working');
  }

}
