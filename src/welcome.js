import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {SessionData} from './sessionData';

@inject(SessionData, Router)
export class Welcome{
  heading = 'Welcome to my Aurelia LoL test page!';
  summonerName = 'Bob The Summoner';

  constructor(sessionData, router){
    this.router = router;
    this.sessionData = sessionData;
    this.summonerName = this.sessionData.summonerName;
  }

  submit(){
    this.sessionData.summonerName = this.summonerName.toLowerCase();
    this.router.navigate('users');
  }

}
