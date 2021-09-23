import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from "../content/content.component";
import { CartComponent } from "./cart/cart.component";
import { VieworderComponent } from "./vieworder/vieworder.component";


const routes: Routes=[
    {path: 'customer', component: ContentComponent,
    children: [ 
        {path:'ViewCart', component: CartComponent},  
        {path:'ViewOrder', component: VieworderComponent}
    ]
},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule{}