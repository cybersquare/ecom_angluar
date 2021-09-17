import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(private httpclient:HttpClient) { }
  AddProduct(data:any){
    console.log(data);
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/AngAddProduct',data)
  }
  ViewProduct(id:any){
    console.log('working');
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/GetResProducts',id);
  }
}
