import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-information-app',
  templateUrl: './information-app.page.html',
  styleUrls: ['./information-app.page.scss'],
})
export class InformationAppPage implements OnInit {

  constructor(public admobFree:AdMobFree) { }

  ngOnInit() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: "ca-app-pub-7500717065501456/3925875361",
      isTesting: false,
      autoShow: true
    };

    this.admobFree.banner.config(bannerConfig);
     
    this.admobFree.banner.prepare()
    .then(() => {
      console.log("really works");
      // banner Ad is ready
      // if we set autoShow to false, then we will need to call the show method here
    })
    .catch(e => console.log(e));
  }

}
