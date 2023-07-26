import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', loadChildren: () => import('./qr-scan/qr-scan.module').then( (m) => m.QrScanModule)
  // },
  // {
  //   path: 'qr-scan', loadChildren: () => import('./qr-scan/qr-scan.module').then( (m) => m.QrScanModule)
  // },
  // {
  //   path: 'otp', loadChildren: () => import('./otp-code/otp-code.module').then( (m) => m.OtpCodeModule)
  // },
  // {
  //   path: 'offer-claimed', loadChildren: () => import('./offer-claimed/offer-claimed.module').then( (m) => m.OfferClaimedModule)
  // },
  // {
  //   path: 'loyalty', loadChildren: () => import('./loyalty/loyalty.module').then( (m) => m.LoyaltyModule)
  // }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
