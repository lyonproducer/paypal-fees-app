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

  toRecieve:any=0;
  toSend:any = 0;
  comission:any=0;

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
      this.toRecieve = 0;
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
