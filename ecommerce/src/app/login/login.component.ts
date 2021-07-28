import { Component, OnInit, Input } from '@angular/core';
import { Login } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  username: string="";
  password: string="";
  login = new Login();

  constructor() { }

  ngOnInit(): void {
  }

  

   userLogin() {
    alert("hello");
    this.login.username= this.username;
    this.login.password= this.password;
    console.log(this.login);

  }


}
