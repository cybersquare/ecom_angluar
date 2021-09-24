import { stringify } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ResellerService } from '../../services/reseller.service';
import { HttpClient,HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import { FormBuilder, FormGroup, FormGroupDirective,FormControl ,Validators } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ViewChild } from '@angular/core'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  @ViewChild('inputFile') myInputVariable: ElementRef;
  constructor(private service: ResellerService, public fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      regprodid: [null, Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      weight: ['', Validators.required],
      unit: ['', Validators.required],
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      brand: ['', Validators.required],
      status: ['', Validators.required],
      avatar: [null, Validators.required]
    })
   }

  ngOnInit(): void {
    console.log('working');
  }
  
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  //Product image upload
  uploadFile(event:any) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }
 //category and sub category dropdown list
  submenu : any= {
    Gadgets: ["Phone", "laptops", "headset", "speaker"],
    Clothes: ["Shirt", "Pants", "T-shirt", "Kurta", "shirt dress"],
    Footwear: ["Sports shoes", "Flats", "Heels", "Boots"]
  }
  subcategoryList:any
  makeSubmenu() {
    var value = this.form.get('category').value
    if (value.length == 0) {
        document.getElementById("subcategory").innerHTML = "<option></option>";
    } else {
      this.subcategoryList = this.submenu[value];
    }
  }
  resetSelection() {
    var category = document.getElementById("category") as HTMLSelectElement;
    category.selectedIndex = 0;
    var subcategory =document.getElementById("subcategory")as HTMLSelectElement;
    subcategory.selectedIndex = 0;
  }
  result:any;
  public headers = new Headers()
  inputfileValidation = true
  submitted = false;
  resellerid = localStorage.getItem("userid");
  //Adding product to server
  AddProduct(){
    this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
    var formdata: any = new FormData();
    formdata.append('title', this.form.get('title').value);
    formdata.append('regproductid', this.form.get('regprodid').value);
    formdata.append('description', this.form.get('description').value);
    formdata.append('price', this.form.get('price').value);
    formdata.append('quantity', this.form.get('quantity').value);
    formdata.append('imageURL',this.form.get('avatar').value);
    formdata.append('weight', this.form.get('weight').value);
    formdata.append('weightunit', this.form.get('unit').value);
    formdata.append('category', this.form.get('category').value);
    formdata.append('subcategory', this.form.get('subcategory').value);
    formdata.append('vendor', this.form.get('brand').value);
    formdata.append('status', this.form.get('status').value);
    formdata.append('resellerid', this.resellerid);
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
    };
    console.log(formdata.get('title'))
    console.log(this.form.value)
    this.service.AddProduct(formdata).subscribe((res: any)=>{
    console.log(res)
    //Show the snack bar to inform the status of adding the product
    if (res.status==200) {
      this._snackBar.open("Product added successfully", 'Close', {duration: 3500,  verticalPosition: 'top'});
      //Clear the form
      if (this.form.valid) {
        setTimeout(() => 
        this.formGroupDirective.resetForm(), 0)
        this.myInputVariable.nativeElement.value = '';
        this.inputfileValidation = false
      }
      
    } else {
      this._snackBar.open("Something went wrong", 'Close', {duration: 3500,  verticalPosition: 'top'});
    }
  });
   
  }

}
