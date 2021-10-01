import { Component, ElementRef, Input, ViewChild,} from '@angular/core';
import { CommonService } from '../services/common.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import {MatAccordion} from '@angular/material/expansion';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent  {
  constructor(private commonservice: CommonService, 
    private _snackBar: MatSnackBar,
    private _router:Router,){}


  @Input() deviceXs: boolean = false;;
  topVal = 0;
  onScroll(e:any) {
    let scrollXs = this.deviceXs ? 55 : 73;
    if (e.srcElement.scrollTop < scrollXs) {
      this.topVal = e.srcElement.scrollTop;
    } else {
      this.topVal = scrollXs;
    }
  }
  ngOnInit(): void {
    // console.log(this.listOfProducts)
    this.AllProducts()
  }
  sideBarScroll() {
    let e = this.deviceXs ? 160 : 130;
    return e - this.topVal;
  }
  public allproducts:any;
  AllProducts(){
    this.commonservice.allProducts().subscribe((res: any)=>{
      this.allproducts = res
      console.log(this.allproducts)
    });
  }
  productList: any;
  search : string ="";
  searchProduct(){
    if(this.search.length >= 3){
      let data={"searchdata": this.search}
      this.commonservice.searchProduct(data).subscribe(res=>{
        // console.log(res)
        if(res.status==200){
          this.productList=res.body
          this.commonservice.sharedSearchProductList=this.productList;
          this._router.navigate(['/ProductSearch']);
        }
        else{
          console.log("no contents")
          this.openSnackBar()
        }
      })
    }
  }

  // openSnackBar() {
  //   this._snackBar.open("No products available", "Dismiss",{
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,

  //   });
  // }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  openSnackBar() {
    this._snackBar.open("No products available", "Dismiss", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  // Tree data
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  @ViewChild(MatAccordion) accordion: MatAccordion;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  typesOfdress: string[] = ['Shirt', 'Pants', 'Tshirt', 'Saree', 'Salwar'];
  typesOfdElectronics: string[] = ['Computer', 'Laptop', 'Mobile', 'Washing machine', 'TV'];
//   listOfProducts: any = [
//     {"productType": "Dress", "items": ['Shirt', 'Pants', 'Tshirt', 'Saree', 'Salwar']},
//     {"productType": "Shoes", "items": ['Shirt', 'Pants', 'Tshirt', 'Saree', 'Salwar']},
//     {"productType": "Electronics", "items": ['Shirt', 'Pants', 'Tshirt', 'Saree', 'Salwar']}
// ]
}
