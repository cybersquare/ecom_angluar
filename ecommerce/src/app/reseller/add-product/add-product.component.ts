import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ResellerService } from '../../services/reseller.service';
import { HttpClient,HttpParams, HttpRequest} from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  constructor(private service: ResellerService, public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      title: [''],
      regprodid: [null],
      description: [''],
      price: [''],
      quantity: [''],
      weight: [''],
      unit: [''],
      category: [''],
      subcategory: [''],
      brand: [''],
      status: [''],
      avatar: [null]
    })
   }

  ngOnInit(): void {
    console.log('working');
  }
  uploadFile(event:any) {
    
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: file
    });
    this.form.get('avatar').updateValueAndValidity()
  }

  result:any;
  public headers = new Headers()
  

  AddProduct(){
    var formdata: any = new FormData();
    formdata.append('title', this.form.get('title').value);
    formdata.append('regprodid', this.form.get('regprodid').value);
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
    formdata.append('resellerid', '1');
    const params = new HttpParams();
    const options = {
      params,
      reportProgress: true,
  };
  const req = new HttpRequest('POST', 'http://cs-ecom.herokuapp.com/common/AngAddProduct', formdata, options);
  this.http.request(req).subscribe(console.log)
    console.log(formdata.get('title'))
    console.log(formdata)
    console.log(this.form.value)
  }
}
