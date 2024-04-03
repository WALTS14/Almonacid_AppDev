import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daashboard',
  templateUrl: './daashboard.page.html',
  styleUrls: ['./daashboard.page.scss'],
})
export class DaashboardPage implements OnInit {

  constructor(private modalController: ModalController,
              private authenticate: AuthenticationService,
              private router : Router,
              ) { }

  ngOnInit(){

  }
  async goModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    })
    return await modal.present();
  }

  async goLogin(){
    this.authenticate.authenticated = false;
    this.router.navigate(['login'])
  }
  
}
