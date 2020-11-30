import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendPaypalPageRoutingModule } from './send-paypal-routing.module';

import { SendPaypalPage } from './send-paypal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPaypalPageRoutingModule
  ],
  declarations: [SendPaypalPage]
})
export class SendPaypalPageModule {}
