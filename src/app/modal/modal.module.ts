import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalPage } from './modal.page';
import { SliderComponent } from '../slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  declarations: [ModalPage, SliderComponent]
})
export class ModalPageModule {}
