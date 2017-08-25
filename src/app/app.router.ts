import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from 'app/components/home/home.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';
import { CheckoutComponent } from 'app/components/wizzard/checkout/checkout.component';

export const router: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'product-selection', component: ProductSelectionComponent },
  { path: 'personal-data', component: PersonalDataComponent },
  { path: 'checkout', component: CheckoutComponent },
  //default redirect
  { path: '**', component: HomeComponent, pathMatch: 'full'},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
