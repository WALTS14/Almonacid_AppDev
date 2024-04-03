import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor() { }

  authenticated = false;
  canActivate(){
    return this.authenticated
  }
}
