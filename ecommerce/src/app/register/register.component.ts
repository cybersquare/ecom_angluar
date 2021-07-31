import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { RegisterCustomer } from './register.model'
import { NgForm } from '@angular/forms'


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
  register() {
    console.log(this.reg)
    this.regServ.registerCustomer(this.reg)
    .subscribe(
      data => console.log('Success', data),
     error => console.error('Error!', error)
    )
  }


  registerCustomer(custRegForm:NgForm){
    console.log(custRegForm.value)
  }
}
