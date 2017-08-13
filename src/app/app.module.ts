import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Daterangepicker } from 'ng2-daterangepicker';

import { routes } from 'app/app.router';
import { AppComponent } from 'app/app.component';
import { AboutComponent } from 'app/components/about/about.component';
import { ServicesComponent } from 'app/components/services/services.component';
import { QuotientComponent } from 'app/components/quotient/quotient.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';

import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { LanguageService } from 'app/services/language/language.service';
import { CardService } from 'app/services/card/card.service';
import { PaypalComponent } from './components/paypal/paypal.component';
import { MyDatePickerModule } from 'mydatepicker';
import { YoutubePlayerMiniModule }  from 'ng2-youtube-player-mini';
import { HomeComponent } from './components/home/home.component'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    QuotientComponent,
    ProductSelectionComponent,
    PersonalDataComponent,
    PaypalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({ 
      card: cardReducer 
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    Daterangepicker,
    MyDatePickerModule,
    YoutubePlayerMiniModule
  ],
  providers: [
    LanguageService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
