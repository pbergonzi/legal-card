import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InsuranceComponent} from "./insurance.component";
import {InsuranceRouting} from "./insurance.routes";
import {InsuranceHeaderComponent} from "./component/insurance-header/insurance-header.component";
import {InsuranceFooterComponent} from "./component/insurance-footer/insurance-footer.component";
import { InsuranceHomeComponent } from './component/insurance-home/insurance-home.component';
import { InsuranceContactComponent } from './component/insurance-contact/insurance-contact.component';
import { InsuranceAboutusComponent } from './component/insurance-aboutus/insurance-aboutus.component';
import { InsuranceResourceComponent } from './component/insurance-resource/insurance-resource.component';
import { InsurancePlansComponent } from './component/insurance-plans/insurance-plans.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import { MapComponent } from './component/map/map.component';
import {PlanFilterPipe} from "./component/shared/planFilter.pipe";
import {CarouselModule} from "ngx-bootstrap";
import {QuotientComponent} from "../components/quotient/quotient.component";
import {MyDatePickerModule} from "mydatepicker";

@NgModule({
  declarations: [
    InsuranceComponent,
    InsuranceHeaderComponent,
    InsuranceFooterComponent,
    InsuranceHomeComponent,
    InsuranceContactComponent,
    InsuranceAboutusComponent,
    InsuranceResourceComponent,
    InsurancePlansComponent,
    MapComponent,
    PlanFilterPipe,
    QuotientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyCbRPhVlxgVwBC0bBOgyB-Dn_K8ONrxb_g'  //the api key use here is dummy please replace this with your own api key
    }),
    InsuranceRouting
  ]
})
export class InsuranceModule {
}
