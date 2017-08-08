import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from 'app/components/about/about.component';
import { ServicesComponent } from 'app/components/services/services.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'product-selection', component: ProductSelectionComponent },
  { path: 'personal-data', component: PersonalDataComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
