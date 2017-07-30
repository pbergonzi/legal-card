import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { QuotientComponent } from './components/quotient/quotient.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { ProductSelectionComponent } from './components/wizzard/product-selection/product-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    QuotientComponent,
    ProductSelectionComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({ 
      card: cardReducer 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
