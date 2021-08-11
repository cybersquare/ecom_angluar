import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AdminSidenavComponent } from "./admin-sidenav/admin-sidenav.component";
import { ManageResellersComponent } from "./manage-resellers/manage-resellers.component";
import { ApproveResellersComponent } from "./approve-resellers/approve-resellers.component";

const routes: Routes=[
    {path: 'admin', component: AdminSidenavComponent, // redirectTo: '/admin/ManageResellers', pathMatch: 'full'
        children: [ 
            {path:'ManageResellers', component: ManageResellersComponent},
            {path:'ApproveReseller', component: ApproveResellersComponent},
            // { path: '', redirectTo: 'products', pathMatch: 'full' },
        ]
    },   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{}