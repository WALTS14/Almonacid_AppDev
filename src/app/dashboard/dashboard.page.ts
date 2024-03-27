import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private modaController: ModalController, private alertController: AlertController
            ,private toastController: ToastController ) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['home'])
  }

  async openModal(){
    await this.modaController.dismiss();
  }

  async alert() {
    const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
    });
    await alert.present();
  }

  // async presentToast() (
  //   const toast = await this.toastController.create({
  //   message: 'Your toast message here',
  //   duration: 2000
  //   });
  //   toast.present();
  //   }
  //   async dismissToast() {
  //   const toast await this.toastController.getTop();
  //   if (toast) {
  //   toast.dismiss();
  //   }
}
