import { Routes } from '@angular/router';
import { DetailComponent } from './detail.component';
import { ListComponent } from './list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'detail/:id',
        component: DetailComponent
    }
];
