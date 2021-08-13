import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from "./add-product/add-product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ViewProductsComponent } from "./view-products/view-products.component";

const routes: Routes=[
    {path: 'reseller', component: DashboardComponent,
    children: [ 
        {path:'addproduct', component:AddProductComponent},
        {path:'products', component:ViewProductsComponent},
        { path: '', redirectTo: 'products', pathMatch: 'full' },   
    ]
},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResellerRoutingModule{}
