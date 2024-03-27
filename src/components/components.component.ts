import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent  implements OnInit {
  username : string = ''
  password : string = ''

  constructor(private authenticate : AuthenticationService, private alertCtrl: AlertController, private router:Router) { }

  ngOnInit() {}

  async proceedLogin(){
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'status',
      message: 'Login Success!',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate([''])
    this.authenticate.authenticated = true;
  }
}
