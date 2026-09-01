import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'input-output',
        loadComponent: () => import('./pages/inpu-output-page/inpu-output-page').then(m => m.InpuOutputPage)
    },
    {
        path: 'Servicios',
        loadComponent: () => import('./pages/servicios-page/servicios-page').then(m => m.ServiciosPage)
    }
];
