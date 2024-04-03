import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { DaashboardPage } from '../daashboard/daashboard.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  condition = true;
  constructor(private modalController:ModalController,
              private alertController: AlertController,
              private toastController: ToastController) { }

  ngOnInit() {
  }


  async goBack(){
    await this.modalController.dismiss();
  }

  async alert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'this is an alert message',
      buttons: ['OK']
    })
    await alert.present();
  }

  async toast(){
    const toast = await this.toastController.create({
      message: 'Message Toast here',
      duration: 1500
    })
    toast.present();
  }
}
