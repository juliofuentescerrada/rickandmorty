import { DetailComponent } from './detail.component';
import { ListComponent } from './list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
];
