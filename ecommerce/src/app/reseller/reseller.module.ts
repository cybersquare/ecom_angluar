import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResellerRoutingModule } from './reseller-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ViewProductsComponent } from './view-products/view-products.component';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent,
    ViewProductsComponent,
  ],
  imports: [
    CommonModule,
    ResellerRoutingModule,
    MaterialDesignModule,
    FormsModule,
    HttpClientModule ,
],
})
export class ResellerModule { }
