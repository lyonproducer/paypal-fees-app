import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';
//import { AdMobPro } from '@ionic-native/admob-pro/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Calcular comisión para recibir',
      url: '/recieve-paypal'
    },
    {
      title: 'Calcular comisión para enviar',
      url: '/send-paypal'
    },
    {
      title: 'Información de uso',
      url: '/information-app'
    },
    {
      title: 'Contáctanos',
      url: 'contact-us'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  //CONFIGURACION DEL BANNER
  bannerConfig: AdMobFreeBannerConfig = {
    id: "ca-app-pub-7500717065501456/3925875361",
    //isTesting: true, // DURANTE DEL DESARROLLO
    autoShow: true,
  };


  //CONFIGURACION DEL INTERSTITIAL
  interstitialConfig: AdMobFreeInterstitialConfig = {
    //isTesting: true, // DURANTE DEL DESARROLLO
    autoShow: false,
    //id: "ID GENERADO EN ADMOB ca-app-pub"
  };
  //CONFIGURACION DEL REWARD VIDEO.
  RewardVideoConfig: AdMobFreeRewardVideoConfig = {
    //isTesting: true, // DURANTE DEL DESARROLLO
    autoShow: false//,
    //id: "ID GENERADO EN ADMOB ca-app-pub"
  };
  //AÑADIR PLATFORM Y ADMOB EN NUESTRO CONSTRUCTOR.


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private iab: InAppBrowser,
    public admobFree: AdMobFree,
    //public admob: AdMobPro
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      // this.admobFree.banner.config(this.bannerConfig);

      // setTimeout(() => {
        // this.admobFree.banner.prepare().then(() => {
        //   console.log('BANNER CARGADO CORRECTAMENTE');
        //   //this.admobFree.banner.show();
        //   console.log("show banner");
        // }).catch(e =>
        //   console.log('PROBLEMA CARGANDO BANNER: ', e)
        // );
      // }, 5000);
      // // this.MostrarBanner();

      // this.admob.createBanner({
      //   adId: "ca-app-pub-7500717065501456/3925875361",
      //   isTesting: true // remove in production 
      // })
      // .then(() => {
      //     this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
      // })
      //   .catch((err) => {
      //     console.log(err);
      // });

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  open() {
    const browser = this.iab.create('https://www.paypal.me/LyonProducerTv');
  }

  MostrarBanner() {
    //COMPROBAR Y MOSTRAR EL BANNER
    this.admobFree.banner.prepare().then(() => {
      console.log('BANNER CARGADO CORRECTAMENTE')
    }).catch(e =>
      console.log('PROBLEMA CARGANDO BANNER: ', e)
    );
  }
}
