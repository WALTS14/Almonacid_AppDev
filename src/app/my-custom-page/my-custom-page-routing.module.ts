import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomPageWithId} from './custom-page-with-id/custom-page-with-id';
import { MyCustomPagePage } from './my-custom-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPagePage
  },
  {
    path: 'my-custom-page-with-id/:d',
    component: CustomPageWithId
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCustomPagePageRoutingModule {}
