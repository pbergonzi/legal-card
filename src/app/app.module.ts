import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { QuotientComponent } from './quotient/quotient.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    QuotientComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({ cardReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
