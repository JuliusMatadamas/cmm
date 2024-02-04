import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module)
    }
];
