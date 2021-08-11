import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    adminUsername : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    adminPassword : new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ])
  })

  get adminusername(){
    return this.loginForm.get('adminUsername');
  }

  get adminpassword(){
    return this.loginForm.get('adminPassword');
  }
}
