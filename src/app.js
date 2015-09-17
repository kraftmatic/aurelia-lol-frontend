export class App {
  configureRouter(config, router){
    config.title = 'LoL Data';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Summoner/Team Info' }
    ]);

    this.router = router;
  }
}
