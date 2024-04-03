import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabPage } from './tab/tab.page';
import { AuthenticationService } from './authentication.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'daashboard',
    loadChildren: () => import('./daashboard/daashboard.module').then( m => m.DaashboardPageModule)
  },
  {
    path: 'tab',
    component: TabPage,
    canActivate:[AuthenticationService],
    children: [
      {
        path: 'daashboard',
        loadChildren: () => import('./daashboard/daashboard.module').then( m => m.DaashboardPageModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
      }
    ]
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
