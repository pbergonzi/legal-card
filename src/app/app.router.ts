import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';

export const router: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full'},

  { path: 'product-selection', component: ProductSelectionComponent },

  { path: 'personal-data', component: PersonalDataComponent },

  { path: '', loadChildren: 'app/components/insurance.module#InsuranceModule' },

  { path: '**', redirectTo: '', pathMatch: 'full'}

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
