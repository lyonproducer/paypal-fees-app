import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recieve-paypal',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'recieve-paypal',
    loadChildren: () => import('./recieve-paypal/recieve-paypal.module').then( m => m.RecievePaypalPageModule)
  },
  {
    path: 'send-paypal',
    loadChildren: () => import('./send-paypal/send-paypal.module').then( m => m.SendPaypalPageModule)
  },
  {
    path: 'information-app',
    loadChildren: () => import('./information-app/information-app.module').then( m => m.InformationAppPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
