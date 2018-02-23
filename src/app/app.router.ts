import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';
import { CheckoutComponent } from 'app/components/wizzard/checkout/checkout.component';

import { InsuranceHomeComponent } from 'app/components/insurance-home/insurance-home.component';
import { InsuranceContactComponent } from 'app/components/insurance-contact/insurance-contact.component';
import { PaymentSuccessComponent } from 'app/components/payment-success/payment-success.component';
import { PaymentCancelledComponent } from 'app/components/payment-cancelled/payment-cancelled.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';


const router: Routes = [
  {
    path: '', component : InsuranceHomeComponent
  },
  {
    path: 'contact', component : InsuranceContactComponent
  },
  {
    path: 'product-selection', component: ProductSelectionComponent
  },
  {
    path: 'personal-data', component: PersonalDataComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'success', component: PaymentSuccessComponent
  },
  {
    path: 'cancel', component: PaymentCancelledComponent
  },
  {
    path: 'terms-and-conditions', component: TermsAndConditionsComponent
  },
  { path: '**', component: InsuranceHomeComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
