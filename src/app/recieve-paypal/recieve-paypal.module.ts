import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecievePaypalPageRoutingModule } from './recieve-paypal-routing.module';

import { RecievePaypalPage } from './recieve-paypal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecievePaypalPageRoutingModule
  ],
  declarations: [RecievePaypalPage]
})
export class RecievePaypalPageModule {}
