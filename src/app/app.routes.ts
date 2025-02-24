import { Routes } from '@angular/router';
import path from 'path';
import { DatatableComponent } from './component/datatable/datatable.component';

import { WithDataOptionsComponent } from './component/with-data-options/with-data-options.component';

export const routes: Routes = [
  {
    path:'' , component:DatatableComponent
  },
  {
    path:'dataOption' , component: WithDataOptionsComponent
  }

];
