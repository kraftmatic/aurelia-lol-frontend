import {inject} from 'aurelia-framework';
import {SessionData} from './sessionData';

@inject(SessionData)
export class Welcome{
  heading = 'Welcome to my Aurelia LoL test page!';
  summonerName = 'Bob The Summoner';

  constructor(sessionData){
    this.sessionData = sessionData;
    this.summonerName = this.sessionData.summonerName;
  }

  submit(){
    this.sessionData.summonerName = this.summonerName.toLowerCase();
    alert(`Summoner name set to ${this.summonerName.toLowerCase()}`);
  }

}
