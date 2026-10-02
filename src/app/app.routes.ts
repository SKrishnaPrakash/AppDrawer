import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'App Menu',
        loadComponent: () => import('./components/appmenu/appmenu').then((m) => m.AppMenuComponent),
    }
];
