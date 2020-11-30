import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendPaypalPage } from './send-paypal.page';

const routes: Routes = [
  {
    path: '',
    component: SendPaypalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendPaypalPageRoutingModule {}
