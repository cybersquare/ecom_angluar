import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() deviceXs: boolean = false;
 
  constructor() { }

  ngOnInit(): void {
  }
  username: string="";
  password: string="";

   login() {
    alert("hello");
  }


}
