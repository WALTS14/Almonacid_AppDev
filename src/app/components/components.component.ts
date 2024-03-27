import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent  implements OnInit {
  username : string = ''
  password : string = ''
  
  constructor(private authenticate : AuthenticationService, private alertCtrl: AlertController, 
          private router:Router, private toast: ToastController) { }

  ngOnInit() {}

 
  async proceedLogin(){

    const Login = true;
    
    if(this.username== 'admin'){
      if(this.password == '123456'){
        const alert = await this.alertCtrl.create({
          header: 'Login',
          subHeader: 'Status',
          message: 'Login Success!',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['dashboard'])
        this.authenticate.authenticated = true;
      }
    } else if(this.username== 'walts'){
      if(this.password == 'mallows'){
        const alert = await this.alertCtrl.create({
          header: 'Login',
          subHeader: 'Status',
          message: 'Login Success!',
          buttons: ['OK']
        });
        await alert.present();
        this.router.navigate(['dashboard'])
        this.authenticate.authenticated = true;
      }
    }
    else{
      const toast = await this.toast.create({
        message: 'Login Failed',
        duration: 1000, // Toast duration in milliseconds
        position: 'bottom' // Toast position
      });
      await toast.present();
    }
    }
  
    

  }

