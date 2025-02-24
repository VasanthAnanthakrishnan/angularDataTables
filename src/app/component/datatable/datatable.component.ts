import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTablesModule } from "angular-datatables";
import { TableDataService } from '../../Shared/TableData/table-data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-datatable',
  imports: [   DataTablesModule,CommonModule , HttpClientModule ],
  providers: [TableDataService],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent {
  productDetails: any[] = [];

  constructor(private service: TableDataService) {}

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.service.getAllProducts().subscribe((data: any) => {
      console.log(data, 'product details');
      this.productDetails = data.data; // Ensure this is an array
    }, error => {
      console.error("Error fetching data:", error);
    });
  }
}
