import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StepsComponent } from './steps/steps.component';
import { AppsComponent } from './apps/apps.component';

import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OnlyNumberDirective } from './_shared/directives/onlynumber.directive';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreditCardDirective } from './_shared/directives/credit-card.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StepsComponent,
    AppsComponent,
    ConfirmationComponent,
    OnlyNumberDirective,
    CheckoutComponent,
    CreditCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
