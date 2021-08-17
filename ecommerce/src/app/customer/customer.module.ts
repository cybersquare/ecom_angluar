import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialDesignModule,
    FormsModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CustomerModule {}

