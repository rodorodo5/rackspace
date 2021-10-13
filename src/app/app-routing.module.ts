import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ValidBothGuard } from './_shared/guards/valid-both.guard';
import { ValidGuard } from './_shared/guards/valid.guard';

const routes: Routes = [
  { path:'',  pathMatch: 'full',redirectTo: 'apps' },
  { path:'apps', component: AppsComponent },
  { path:'checkout', component: CheckoutComponent, canActivate: [ValidGuard] },
  { path:'confirmation', component: ConfirmationComponent, canActivate: [ValidBothGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
