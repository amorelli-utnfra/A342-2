import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { childGuard } from './guards/child-guard';
import { formGuard } from './guards/form-guard';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login').then(m => m.Login)
    },
    {
        path: 'bienvenido',
        loadComponent: () => import('./componentes/bienvenido/bienvenido').then(m => m.Bienvenido),
        canActivate: [authGuard]
    },
    {
        path: 'bienvenido',
        loadComponent: () => import('./componentes/bienvenido/bienvenido').then(m => m.Bienvenido),
    
    },
    {
        path: 'productos',
        loadComponent: () => import('./componentes/productos/productos').then(m => m.Productos),
        children: [
            {
                path: 'detalle/:id',
                loadComponent: () => import('./componentes/detalle-producto/detalle-producto').then(m => m.DetalleProducto)
            }
        ],
        // CanActivateChild va a evaluar si las rutas hijas pueden ser activadas antes de entrar en la ruta padre.
        canActivateChild: [childGuard],
        // CanActivate va a matchear la ruta antes de activarla
        canActivate: [authGuard],
        // CanMatch va a evaluar si la ruta puede ser matcheada antes de activarla, caso contrario el enrutamiento seguira su curso sin activar esta ruta.
        canMatch: [roleGuard]
    },
    {
        path: 'registro',
        loadComponent: () => import('./componentes/registro/registro').then(m => m.Registro),
        canDeactivate: [formGuard]
    },
    {
        path: '**',
        loadComponent: () => import('./componentes/productos-error/productos-error').then(m => m.ProductosError),

    }
];
