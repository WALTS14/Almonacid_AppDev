import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaashboardPageRoutingModule } from './daashboard-routing.module';

import { DaashboardPage } from './daashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaashboardPageRoutingModule
  ],
  declarations: [DaashboardPage]
})
export class DaashboardPageModule {}
