import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';
import { CheckoutComponent } from 'app/components/wizzard/checkout/checkout.component';

import { InsuranceHomeComponent } from 'app/components/insurance-home/insurance-home.component';
import { InsuranceContactComponent } from 'app/components/insurance-contact/insurance-contact.component';
import { InsuranceAboutusComponent } from 'app/components/insurance-aboutus/insurance-aboutus.component';
import { InsuranceResourceComponent } from 'app/components/insurance-resource/insurance-resource.component';
import { InsurancePlansComponent } from 'app/components/insurance-plans/insurance-plans.component';


const router: Routes = [
  {
      path: '', component : InsuranceHomeComponent
  },
  {
    path: 'contact', component : InsuranceContactComponent
  },
  {
    path: 'about', component : InsuranceAboutusComponent
  },
  {
    path: 'resources', component : InsuranceResourceComponent
  },
  {
    path: 'plans', component : InsurancePlansComponent
  },
  { 
    path: 'product-selection', component: ProductSelectionComponent 
  },
  { 
    path: 'personal-data', component: PersonalDataComponent 
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
