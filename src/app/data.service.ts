import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }
  errorCondition = false;
  fetchData(){
    return new Promise((resolve, reject) => {
      if(this.errorCondition){
        reject(new Error('Authentication Need'));
      }else{
        setTimeout(()=> {
          resolve('WOW')
        }, 2000)
      }
    });
  }
 
}
