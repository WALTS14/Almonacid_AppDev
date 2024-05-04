import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  users: User = new User();  
  id: any;

   nbaTeam = [
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State Warriors",
    "Houston Rockets",
    "Indiana Pacers",
    "LA Clippers",
    "Los Angeles Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "New Orleans Pelicans",
    "New York Knicks",
    "Oklahoma City Thunder",
    "Orlando Magic",
    "Philadelphia 76ers",
    "Phoenix Suns",
    "Portland Trail Blazers",
    "Sacramento Kings",
    "San Antonio Spurs",
    "Toronto Raptors",
    "Utah Jazz",
    "Washington Wizards"
];

  constructor(private home: HomeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sync(this.home.newList); 
  }

async update(){
  if(this.users.id ){
    await this.home.tryUpdate(this.users);
    this.home.presentAlert('success','Successfully Updated');
  }
  this.users = new User();
  this.router.navigate(['home']);
}
sync(users:iUser[]){
  users.forEach(user => {
    if(this.id == user.id ){
      this.users.id = user.id;
      this.users.nbaPlayer = user.nbaPlayer;
      this.users.playerNumber = user.playerNumber;
      this.users.nbaTeam = user.nbaTeam;
      this.users.draftDate = user.draftDate;
      this.users.isActive = user.isActive;
    }
  });

}
}