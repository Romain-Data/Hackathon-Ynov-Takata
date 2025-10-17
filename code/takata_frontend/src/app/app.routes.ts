import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'authenticate',
        loadComponent: () =>
            import('./pages/authenticate/authenticate.component').then(m => m.AuthenticateComponent),
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./pages/register/register.component').then(m => m.RegisterComponent),
    },
    {
        path: 'user',
        loadComponent: () =>
            import('./pages/user/user.component').then(m => m.UserComponent),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',   // redirection de / vers /home
    },
    {
        path: '**',
        redirectTo: 'home',   // toute autre URL inconnue
    },
];
