import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-send-paypal',
  templateUrl: './send-paypal.page.html',
  styleUrls: ['./send-paypal.page.scss'],
})
export class SendPaypalPage implements OnInit {

  selectedCountry = "Latinoamerica"

  percentage: number = 5.4;
  feeFixed: number = 0.30

  toRecieve: any = 0;
  toSend: any = null;
  comission: any = 0;

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


  changeSelect() {
    if (this.selectedCountry == "Latinoamerica") {
      this.percentage = 5.4;
      this.feeFixed = 0.30;
    } else {
      this.percentage = 2.90;
      this.feeFixed = 0.30;
    }
  }

  calculate() {
    this.toRecieve = 0;

    // this.toRecieve = (this.toSend - (((this.percentage * this.toSend) / 100) + this.feeFixed)).toFixed(2);
    // this.comission = (this.toRecieve - this.toSend).toFixed(2);

    // getAmount = amountSent - (((percentage * amountSent) / 100) + fee);
    // totalfees = ((percentage * amountSent) / 100) + fee;

    // sendAmount = Math.round(getAmount*100)/100;
    // sendTotalfees = Math.round(totalfees*100)/100;


    this.toRecieve = (this.toSend - (((this.percentage * this.toSend) / 100) + this.feeFixed));
    // totalfees = ((percentage * amountSent) / 100) + fee;
    this.toRecieve = Math.round(this.toRecieve * 100) / 100;

    this.comission = (((this.percentage * this.toSend) / 100) + this.feeFixed);
    this.comission = Math.round(this.comission * 100) / 100;

    if (this.toSend == null || this.toSend == 0) {
      this.toRecieve = 0;
      this.toSend = null;
      this.comission = 0;
    }

  }

  clean() {
    this.comission = 0;
    this.toRecieve = 0;
    this.toSend = 0;
  }
}
