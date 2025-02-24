import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';


import { DataTableDirective, DataTablesModule } from "angular-datatables";
import { TableDataService } from '../../Shared/TableData/table-data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Config } from 'datatables.net';
declare var $ : any

@Component({
  selector: 'app-datatable',
  imports: [   DataTablesModule,CommonModule , HttpClientModule , RouterLink , FormsModule  ],
  providers: [TableDataService],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css'
})
export class DatatableComponent {
  productDetails: any[] = [];
  @ViewChild(DataTableDirective, {static: false})
  datatableElement!:DataTableDirective
  min: number | undefined;
  max: number | undefined;

  dtOptions: Config = {};
  constructor(private service: TableDataService) {}

  ngOnInit() {
    this.initializeDataTable();
    this.getProductDetails();
  }

  initializeDataTable() {
    $.fn['dataTable'].ext.search.push((settings: Config, data: any) => {
      const id = parseFloat(data[0]) || 0; // ID column
      if (
        (this.min === undefined && this.max === undefined) ||
        (this.min === undefined && id <= this.max!) ||
        (this.min! <= id && this.max === undefined) ||
        (this.min! <= id && id <= this.max!)
      ) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'First Name', data: 'firstName' },
        { title: 'Last Name', data: 'lastName' }
      ]
    };
  }

  getProductDetails() {
    this.service.getAllProducts().subscribe((data: any) => {
      console.log(data, 'product details');
      this.productDetails = data.data;
    }, error => {
      console.error("Error fetching data:", error);
    });
  }


  filterById(): boolean {
    this.datatableElement.dtInstance.then(dtInstance => {
      dtInstance.draw();
    });
    return false;
  }
}
