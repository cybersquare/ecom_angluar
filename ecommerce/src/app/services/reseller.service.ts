import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResellerService {

  constructor(private httpclient:HttpClient) { }
  AddProduct(data:any):Observable<HttpResponse<any>>{
    console.log(data);
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/AngAddProduct',data, { observe: 'response' })
  }
  ViewProduct(id:any){
    console.log('working');
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/GetResProducts',id);
  }
  DeleteProduct(id:any){
    console.log("working");
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/resDeleteProducts',id);
  }
  UpdateProduct(data:any){
    console.log("working");
    return this.httpclient.post('http://cs-ecom.herokuapp.com/common/resUpdateProducts',data);
  }
  
}
