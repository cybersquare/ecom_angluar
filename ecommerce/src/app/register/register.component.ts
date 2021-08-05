import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RegisterCustomer } from './register.model'
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  
  constructor(private regServ:CommonService, private datePipe: DatePipe) { }
 
  ngOnInit(): void {
  }
  reg = new RegisterCustomer();
  // register() {
  //   console.log(this.reg)
  //   this.regServ.registerCustomer(this.reg)
  //   .subscribe(
  //     data => console.log('Success', data),
  //    error => console.error('Error!', error)
  //   )
  // }


  registerCustomer(custRegForm:NgForm){
    console.log(custRegForm.value);
    let cust=custRegForm.value;

    // this.reg.firstname = cust['fnanme'];
    console.log(cust.fname);

    this.reg.firstname = cust.fname;
    this.reg.lastname = cust.lname;
    this.reg.gender = cust.gender;
    this.reg.mobile = cust.phone;
    this.reg.password = cust.password;
    this.reg.username = cust.email;
    this.reg.usertype = 'customer';
    this.reg.address = cust.address;
    this.reg.country = cust.country;
    this.reg.dateofbirth = this.datePipe.transform(cust.dob,"yyyy-MM-dd");
    this.regServ.registerCustomer(this.reg).subscribe(res=>{
      console.log(res);
    })
  }
}
