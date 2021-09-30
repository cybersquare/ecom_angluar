import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {

  constructor(private customerservice: CustomerserviceService) { }

  ngOnInit(): void {
    this.Vieworder()
  }
  ProductDetails: any
  Vieworder(){
    let data={"customerid": localStorage.getItem('userid')}
    this.customerservice.viewOrders(data).subscribe(res=>{
      console.log( res.body )
      this.ProductDetails=res.body;
    })
  }
}
