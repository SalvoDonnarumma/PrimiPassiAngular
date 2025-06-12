import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./welcome/welcome').then(m => m.Welcome)},
    {path: 'welcome', loadComponent: () => import('./welcome/welcome').then(m => m.Welcome)},
    {path: 'welcome2', loadComponent: () => import('./welcome2/welcome2').then(m => m.Welcome2)},
    {path: 'welcome3', loadComponent: () => import('./welcome3/welcome3').then(m => m.Welcome3)},
    {path: 'welcome4', loadComponent: () => import('./welcome4/welcome4').then(m => m.Welcome4)},
    {path: 'welcome5', loadComponent: () => import('./welcome5/welcome5').then(m => m.Welcome5)},
    {path: 'welcome6', loadComponent: () => import('./welcome6/welcome6').then(m => m.Welcome6)},
    {path: '**', loadComponent: () => import('./errorpage/errorpage').then(m => m.Errorpage)}
];
