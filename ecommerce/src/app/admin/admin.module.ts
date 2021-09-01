import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageResellersComponent } from './manage-resellers/manage-resellers.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ApproveResellersComponent } from './approve-resellers/approve-resellers.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminRoutingModule } from './admin-routing.module'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ManageResellersComponent,
    ApproveResellersComponent,
    AdminLoginComponent,
    AdminSidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  exports: [
    ManageResellersComponent,
    ApproveResellersComponent,
    AdminLoginComponent,
    AdminSidenavComponent,
  ]
})
export class AdminModule { }
