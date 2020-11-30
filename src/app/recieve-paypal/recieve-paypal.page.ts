import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recieve-paypal',
  templateUrl: './recieve-paypal.page.html',
  styleUrls: ['./recieve-paypal.page.scss'],
})
export class RecievePaypalPage implements OnInit {

  selectedCountry="Latinoamerica"

  percentage:number= 5.4;
  feeFixed:number = 0.30

  toRecieve:any;
  toSend:any;

  constructor() { }

  ngOnInit() {
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

  }

}
