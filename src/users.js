import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {SessionData} from './sessionData'
import 'fetch';

@inject(HttpClient, SessionData)
export class Users{
  heading = 'Summoner Name:';
  summonerName = null;
  summonerResponse = [];

  constructor(summonerService, sessionData){
    this.sessionData = sessionData;
    this.summonerName = this.sessionData.summonerName;
    summonerService.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://na.api.pvp.net/');
    });

    this.summonerService = summonerService;
  }

  activate(){
    var fullUrl = 'api/lol/na/v1.4/summoner/by-name/' + this.summonerName + '?api_key=07677078-c0bb-4fe6-adcd-edc814763336';
    return this.summonerService.fetch(fullUrl)
      .then(response => response.json())
      .then(summonerResponse => this.summonerResponse = summonerResponse);
  }
}
