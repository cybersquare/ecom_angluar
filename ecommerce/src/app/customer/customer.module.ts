import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    NavigationComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialDesignModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CustomerModule {}

