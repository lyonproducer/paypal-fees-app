import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

@Component({
  selector: 'app-recieve-paypal',
  templateUrl: './recieve-paypal.page.html',
  styleUrls: ['./recieve-paypal.page.scss'],
})
export class RecievePaypalPage implements OnInit {

  selectedCountry="Latinoamerica"

  percentage:number= 5.4;
  feeFixed:number = 0.30

  toRecieve:any=null;
  toSend:any = 0;
  comission:any=0;

  constructor(public admobFree:AdMobFree) { }

  ngOnInit() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: "ca-app-pub-7500717065501456/3925875361",
      //isTesting: true,
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


  changeSelect(){
    if(this.selectedCountry=="Latinoamerica"){
      this.percentage = 5.4;
      this.feeFixed = 0.30;
    }else{
      this.percentage = 2.90;
      this.feeFixed = 0.30;
    }
  }

  calculate(){

  
    
    this.toSend = 0;
    this.toSend = ((100 * (this.feeFixed + this.toRecieve)) / ((0-this.percentage) + 100)).toFixed(2);

    var xy = Math.round(this.toSend*100)/100;
    var xy_dos = xy.toString().replace(/\./g,',');
    var xxx = xy - this.toRecieve;
    //xxx = parseFloat(xxx);

    // console.log("xxx", xxx);
    // console.log("xy", xy);
    // console.log("xy_dos", xy_dos);
    console.log("toRecieve ", this.toSend);

    // this.toSend = this.toRecieve + ( this.toRecieve * (this.percentage/100) ) + 0.30;
    this.comission = (this.toSend - this.toRecieve).toFixed(2);

    if(this.toRecieve == null || this.toRecieve == 0){
      this.toRecieve = null;
      this.toSend = 0;
      this.comission = 0;
    }
    
  }

  clean(){
    this.comission = 0;
    this.toRecieve= 0;
    this.toSend = 0;
  }

}
