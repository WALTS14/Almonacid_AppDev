import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) { }



  goToMyCustomPage() {
    // Navigate to 'my-custom-page'
    this.router.navigate(['my-custom-page/my-custom-page-with-id',2]);
  }
}
