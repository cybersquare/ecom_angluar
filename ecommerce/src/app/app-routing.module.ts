import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
// MainToolbarComponent
const routes: Routes = [
  { path: '', component: MainToolbarComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent , canActivate:[AuthGuard]},
  // { path: 'login', component: LoginComponent , canActivate:[AuthGuard]}, Sample - How to apply auth guard 
  { path: 'adminLogin', component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

