import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuntheticationService } from '../aunthetication.service';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Arrayemail: String[] = ['walts', 'admin'];
  // Arraypass: String[] = ['pass1', 'pass2'];

  email: string = "";
  password: string = "";

  constructor(private authserv: AuntheticationService, private router: Router, private alertController: AlertController) { }

    

   async login(){
     const auth = getAuth();
     signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {

        const user = userCredential.user;
        this.authserv.setAuthentication(true);
        this.presentAlert('Success', 'Welcome'+user.displayName);
        this.router.navigate(['home']);
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        this.presentAlert('Error', 'Invalid Password');
        console.error(error);
      });
  }
  ngOnInit() {
  }
  
  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
