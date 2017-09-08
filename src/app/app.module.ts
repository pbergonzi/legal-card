import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { routes } from 'app/app.router';
import { AppComponent } from 'app/app.component';

import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { CardService } from 'app/services/card/card.service';
import { PaypalComponent } from './components/paypal/paypal.component';
import { MyDatePickerModule } from 'mydatepicker';
import { InsuranceHeaderComponent } from 'app/components/insurance-header/insurance-header.component';
import { InsuranceFooterComponent } from 'app/components/insurance-footer/insurance-footer.component';
import { InsuranceHomeComponent } from 'app/components/insurance-home/insurance-home.component';
import { InsuranceContactComponent } from 'app/components/insurance-contact/insurance-contact.component';
import { InsuranceAboutusComponent } from 'app/components/insurance-aboutus/insurance-aboutus.component';
import { InsuranceResourceComponent } from 'app/components/insurance-resource/insurance-resource.component';
import { InsurancePlansComponent } from 'app/components/insurance-plans/insurance-plans.component';
import { MapComponent } from 'app/components/map/map.component';
import { PlanFilterPipe } from 'app/services/pipes/planFilter.pipe';
import { QuotientComponent } from 'app/components/quotient/quotient.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';
import { CarouselModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceHeaderComponent,
    InsuranceFooterComponent,
    InsuranceHomeComponent,
    InsuranceContactComponent,
    InsuranceAboutusComponent,
    InsuranceResourceComponent,
    InsurancePlansComponent,
    MapComponent,
    PlanFilterPipe,
    QuotientComponent,
    ProductSelectionComponent,
    PersonalDataComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({
      card: cardReducer
    }),
    MyDatePickerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCbRPhVlxgVwBC0bBOgyB-Dn_K8ONrxb_g'  //the api key use here is dummy please replace this with your own api key
    }),
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
