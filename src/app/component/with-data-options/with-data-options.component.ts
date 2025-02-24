import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { TableDataService } from '../../Shared/TableData/table-data.service';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-with-data-options',
  imports:  [ DataTablesModule,CommonModule , HttpClientModule , ],
  providers: [TableDataService],
  templateUrl: './with-data-options.component.html',
  styleUrl: './with-data-options.component.css'
})
export class WithDataOptionsComponent {
productDetails: any[] = [];
dtOptions: Config = {};

  constructor(private service: TableDataService) {}

  ngOnInit() {
    this.getProductDetails();
    // this.dtOptions = {
    //   ajax: 'data/data.json',
    //   columns: [{
    //     title: 'productId',
    //     data: 'productId'
    //   }, {
    //     title: 'productName',
    //     data: 'productName'
    //   }, {
    //     title: 'productPrice',
    //     data: 'productPrice'
    //   },
    //   {
    //     title: 'productShortName',
    //     data: 'productShortName'
    //   }
    // ],

    //   dom: 'Bfrtip',

    // };
  }

  getProductDetails() {
    this.service.getAllProducts().subscribe((data: any) => {
      console.log(data, 'product details with data');
      this.productDetails = data.data;
    }, error => {
      console.error("Error fetching data:", error);
    });
  }
}
