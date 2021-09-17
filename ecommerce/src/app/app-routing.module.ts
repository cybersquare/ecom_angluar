import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SearchProductsComponent } from './search-products/search-products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


// MainToolbarComponent
const routes: Routes = [
  { path: '', component: MainToolbarComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ProductSearch', component: SearchProductsComponent },
  { path: 'ViewProduct', component: ViewProductComponent },
  // { path: 'login', component: LoginComponent , canActivate:[AuthGuard]}, Sample - How to apply auth guard 
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: 'view-profile', component: UserProfileComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

