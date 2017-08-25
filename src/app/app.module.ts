import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { routes } from 'app/app.router';
import { AppComponent } from 'app/app.component';
import { QuotientComponent } from 'app/components/quotient/quotient.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';

import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { CardService } from 'app/services/card/card.service';
import { PaypalComponent } from './components/paypal/paypal.component';
import { MyDatePickerModule } from 'mydatepicker';
import { YoutubePlayerMiniModule }  from 'ng2-youtube-player-mini';
import { HomeComponent } from './components/home/home.component';
import { CheckoutComponent } from './components/wizzard/checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    QuotientComponent,
    ProductSelectionComponent,
    PersonalDataComponent,
    PaypalComponent,
    HomeComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({ 
      card: cardReducer 
    }),
    MyDatePickerModule,
    YoutubePlayerMiniModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
