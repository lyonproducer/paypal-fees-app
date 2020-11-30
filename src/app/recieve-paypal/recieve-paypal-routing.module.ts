import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecievePaypalPage } from './recieve-paypal.page';

const routes: Routes = [
  {
    path: '',
    component: RecievePaypalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecievePaypalPageRoutingModule {}
