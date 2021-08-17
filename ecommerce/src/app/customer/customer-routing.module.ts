import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from "./navigation/navigation.component";


const routes: Routes=[
    {path: 'customer', component: NavigationComponent,
    children: [ 
        // {path:'addproduct', component:AddProductComponent},
        // {path:'products', component:ViewProductsComponent},
        // { path: '', redirectTo: 'products', pathMatch: 'full' },   
    ]
},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule{}