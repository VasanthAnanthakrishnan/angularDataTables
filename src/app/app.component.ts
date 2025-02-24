import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatatableComponent } from './component/datatable/datatable.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDataTables';
}
