import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RegisterCustomer } from './register.model'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  constructor(private regServ:CommonService) { }
 
  ngOnInit(): void {
  }
  reg = new RegisterCustomer();
  fname: string="";
  lname: string="";
  email: string="";
  password: string="";
  mobile: string="";
  cpassword: string="";

   register() {
    // alert(this.reg.fnname);
    // this.reg.fnname = this.fname;
    // this.reg.lname = this.lname;
    // console.log(this.reg);
    this.regServ.registerCustomer(this.reg).subscribe((res)=>{
      alert('Http call done');
      console.log(res);
    });
  }
}
