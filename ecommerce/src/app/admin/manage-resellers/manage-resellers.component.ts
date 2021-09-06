import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { AdminService } from 'src/app/services/admin.service';


// table element set
// export interface PeriodicElement {
//   name: string;
//   position: string;
//   weight: string;
//   symbol: string;
// }

@Component({
  selector: 'app-manage-resellers',
  templateUrl: './manage-resellers.component.html',
  styleUrls: ['./manage-resellers.component.css']
})

export class ManageResellersComponent implements OnInit {

  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.getresellerdata()
  }

  displayedColumns: string[] = ['Reseller Name', 'Address', 'Email', 'Mobile'];
  dataSource :any;

  applyFilter(event: Event) {
    console.log("filtering")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getresellerdata(){
    this.adminservice.AllResellers().subscribe(res=>{
      const ELEMENT_DATA= res;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    })
  }
}