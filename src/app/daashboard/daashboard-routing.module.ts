import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaashboardPage } from './daashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DaashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaashboardPageRoutingModule {}
