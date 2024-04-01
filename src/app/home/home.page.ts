import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  addNum = 4;
  numArr = [1,2,3];
  out: boolean = false;

  data: string = '';
  LoadingText: String = 'PROCESSING';
  Load: boolean = false;
  showArr: boolean = false;

  constructor(private authenticatinService:AuthenticationService,
              private dataService: DataService) {}

  goAuthorize(){
    alert('You can now see the numbers')
    this.authenticatinService.authenticate = true;
    this.dataService.errorCondition = false;
  }
  goUnauthorize(){
    alert('The program is close')
    this.authenticatinService.authenticate = false;
    this.dataService.errorCondition = true; 
    this.showArr = false;
  }

  async showNum(){
    this.Load = true;
    await this.dataService
      .fetchData()
      .then((data) => {
        this.showArr = true;
      })
      .catch((error) => {
        console.log ('Process failed', error);
      })
      .finally(() => {
        this.Load = false
      });
  }

  async Addnum(){
    this.Load = true;
    this.showArr = false;
    await this.dataService
    .fetchData()
    .then((data) =>{
      this.numArr = [...this.numArr, this.addNum];
      this.addNum += 1;
    })
    .catch((error) =>{
      console.error('Process failed', error)
    })
    .finally(() =>{
      this.Load = false;
    })
  }
}
