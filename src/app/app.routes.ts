import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'herostatus',
  //   loadComponent: () => import('./herostatus/herostatus.page').then( m => m.HerostatusPage)
  // },
  // {
  //   path: 'hero-detail',
  //   loadComponent: () => import('./hero-detail/hero-detail.page').then( m => m.HeroDetailPage)
  // },
];
