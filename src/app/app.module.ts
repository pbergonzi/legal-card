import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from 'app/components/about/about.component';
import { ServicesComponent } from 'app/components/services/services.component';
import { QuotientComponent } from './components/quotient/quotient.component';
import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { ProductSelectionComponent } from './components/wizzard/product-selection/product-selection.component';
import { LanguageService } from 'app/services/language/language.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

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
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })    
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
