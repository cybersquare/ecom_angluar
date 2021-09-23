import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomerserviceService } from 'src/app/services/customerservice.service';

declare var Razorpay: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private customerservice: CustomerserviceService) { }
  price=20000;
  productdata: any;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ngOnInit(): void {
    this.loadCart()
    this.firstFormGroup = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Address: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  loadCart(){
    let data={"customerid": localStorage.getItem('userid')}
    this.customerservice.viewCart(data).subscribe(res=>{
      this.productdata=res.body;
      console.log(this.productdata)
    })
  }
  options: any;
  
  createRzpayOrder() {
    let customerid= localStorage.getItem('userid')
    let orderAddress=this.secondFormGroup.value.Address
    let data={"customerid": customerid, "totalprice": this.productdata.totalAmmount, "address": orderAddress}
    this.customerservice.createOrder(data).subscribe(res=>{
      console.log(res);
      // let responseid=
      this.options = {
        "key": "rzp_test_jznmHCFBf6ZMUd", // Enter the Key ID generated from the Dashboard
        "amount": res.body.totalAmmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Cybersquare",
        "description": "Place order",
        "image": "https://cs-ecom.herokuapp.com/static/images/cs_ecom_logo.png",
        "id": "1234",
        "order_id": res.body.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "prefill": {
          "name": this.firstFormGroup.value.fname+" "+ this.firstFormGroup.value.lname,
          "email": this.secondFormGroup.value.email
        },
        "handler": function(res: any) {
          console.log("payment success")
            console.log(res.razorpay_payment_id);
            console.log(res.razorpay_order_id);
            console.log(res.razorpay_signature)
            this.updatePayment()
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    rzp1.on('payment.failed', function(response: any) {
      console.log("payment Failed")
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.payment_id);
  });
  rzp1.open()
    })
  }

  updatePayment(){
    let data={"customerid": localStorage.getItem('userid')}
    this.customerservice.placeOrder(data).subscribe(res=>{
      console.log(res)
    })
  }
}
