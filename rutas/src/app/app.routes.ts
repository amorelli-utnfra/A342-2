import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./componentes/home/home').then(m => m.Home)
    },
    {
        path: "items",
        loadComponent: () => import('./componentes/items/items').then(m => m.Items),
        children: [
            // {
            //     path: "detalle/:id",
            //     component: Detalle
            // }
            {
                path: "detalle",
                loadComponent: () => import('./componentes/detalle/detalle').then(m => m.Detalle)
            }
        ]
    },
    {
        path: 'error',
        loadComponent: () => import('./componentes/error/error').then(m => m.Error)
    },
    {
        path: '**',
        redirectTo: 'error'
    }

];
