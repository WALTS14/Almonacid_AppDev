import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']

})
export class LoginPage implements OnInit {

  Arrayemail: String[] = ['walts', 'admin'];
  Arraypass: String[] = ['pass1', 'pass2'];

  Email: String = "";
  Password: String = "";


  constructor(private alertCtrl: AlertController,private router: Router,
              private authenticate: AuthenticationService,
              private toast: ToastController) { }

    
  ngOnInit() {
  }
 
  async login(){

     const Login = true;

  if (this.Email== this.Arrayemail[0] && this.Password == this.Arraypass[0] || 
      this.Email== this.Arrayemail[1] && this.Password == this.Arraypass[1] ){
        const alert = await this.alertCtrl.create({
        header: 'Login',
        subHeader: 'Status',
        message: 'Login Succes',
        buttons: ['OK']
      });
      await alert.present();
      this.authenticate.authenticated = true;
      this.router.navigate(['tab/daashboard'])
     } else{
       const toast = await this.toast.create({
       message: "Login failed",
       duration: 1000,
     });
      toast.present();
    }
  }
}

