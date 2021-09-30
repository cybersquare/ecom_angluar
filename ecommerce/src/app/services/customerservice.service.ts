import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private httpclient: HttpClient) { }
  private URL = 'http://localhost:8000/common/';
  private ProdURL= 'http://cs-ecom.herokuapp.com/common/'

  prodAddToCart(productdetails: any):Observable<HttpResponse<any>>{
    let data={'productid': "productViewId" }
    return this.httpclient.post<any>(this.ProdURL+"ProductAddToCart", productdetails, { observe: 'response' })
  }

  viewCart(userdetails: any):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(this.ProdURL+"AngViewCart", userdetails, { observe: 'response' })
  }

  createOrder(data: any):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(this.ProdURL+"createOrder", data, {observe: "response"})
  }

  placeOrder(data: any):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(this.ProdURL+"PlaceOrder", data, {observe: "response"})
  }

  viewOrders(data: any):Observable<HttpResponse<any>>{
    return this.httpclient.post<any>(this.ProdURL+"viewOrders", data, {observe: "response"})
  }
}