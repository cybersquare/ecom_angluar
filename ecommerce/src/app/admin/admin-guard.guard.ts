import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private adminService:AdminService,
    private _router:Router){}

  canActivate(): boolean {
    if(!this.adminService.isAuthenticated()){
      this._router.navigateByUrl('adminLogin')
    }
    return this.adminService.isAuthenticated()
  }
  
}
