import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'modulo',
        loadChildren: () => import('./modulos/mi-modulo/mi-modulo-module').then(m => m.MiModuloModule)
    },
    {
        path: 'componente3',
        loadComponent: () => import('./componentes/componente3/componente3').then(c => c.Componente3)
    }
];
