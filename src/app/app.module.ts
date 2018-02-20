import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';

import { routes } from 'app/app.router';
import { AppComponent } from 'app/app.component';

import { StoreModule } from '@ngrx/store';
import { cardReducer } from 'app/reducers/card.reducer';
import { CardService } from 'app/services/card/card.service';
import { ConversionTrackService } from 'app/services/conversion/conversionTrack.service';
import { GoogleAnalyticsEventsService } from 'app/services/analytics/ga.service';
import { PaypalComponent } from './components/paypal/paypal.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoBlackAndWhiteComponent } from './components/logo-bw/logo-bw.component';
import { MyDatePickerModule } from 'mydatepicker';
import { InsuranceHeaderComponent } from 'app/components/insurance-header/insurance-header.component';
import { InsuranceFooterComponent } from 'app/components/insurance-footer/insurance-footer.component';
import { InsuranceHomeComponent } from 'app/components/insurance-home/insurance-home.component';
import { InsuranceContactComponent } from 'app/components/insurance-contact/insurance-contact.component';
import { PaymentSuccessComponent } from 'app/components/payment-success/payment-success.component';
import { PaymentCancelledComponent } from 'app/components/payment-cancelled/payment-cancelled.component';
import { PlanFilterPipe } from 'app/services/pipes/planFilter.pipe';
import { QuotientComponent } from 'app/components/quotient/quotient.component';
import { SeparatorComponent } from 'app/components/separator/separator.component';
import { ProductSelectionComponent } from 'app/components/wizzard/product-selection/product-selection.component';
import { PersonalDataComponent } from 'app/components/wizzard/personal-data/personal-data.component';
import { CheckoutComponent } from 'app/components/wizzard/checkout/checkout.component';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceHeaderComponent,
    InsuranceFooterComponent,
    InsuranceHomeComponent,
    InsuranceContactComponent,
    SeparatorComponent,
    PlanFilterPipe,
    QuotientComponent,
    ProductSelectionComponent,
    PersonalDataComponent,
    PaypalComponent,
    LogoComponent,
    LogoBlackAndWhiteComponent,
    CheckoutComponent,
    PaymentSuccessComponent,
    PaymentCancelledComponent
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    StoreModule.provideStore({
      card: cardReducer
    }),
    MyDatePickerModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [
    CardService,
    GoogleAnalyticsEventsService,
    ConversionTrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
