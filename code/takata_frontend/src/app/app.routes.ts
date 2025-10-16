import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
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
