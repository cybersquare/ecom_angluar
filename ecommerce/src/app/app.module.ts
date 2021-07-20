import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClient, HttpClientModule } from '@angular/common/http'


import {FormsModule} from '@angular/forms';


import {MatButtonModule,} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainHeaderComponent } from './main-header/main-header.component';
import {MatMenuModule} from '@angular/material/menu';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import {MatCardModule} from '@angular/material/card';

import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



import { ContentComponent } from './content/content.component';
import { CustomerModule } from './customer/customer.module';
import { ResellerModule } from './reseller/reseller.module';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainToolbarComponent,
    ContentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule ,
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule ,
    MatMenuModule,
    MatCardModule,
    
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatBadgeModule,
    FormsModule,
    MatFormFieldModule,
  
    CustomerModule,
    ResellerModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
