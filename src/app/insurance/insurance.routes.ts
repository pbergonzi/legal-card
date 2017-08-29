
import {RouterModule, Routes} from "@angular/router";
import {InsuranceComponent} from "./insurance.component";
import {InsuranceHomeComponent} from "./component/insurance-home/insurance-home.component";
import {InsuranceContactComponent} from "./component/insurance-contact/insurance-contact.component";
import {InsuranceAboutusComponent} from "./component/insurance-aboutus/insurance-aboutus.component";
import {InsurancePlansComponent} from "./component/insurance-plans/insurance-plans.component";
import {InsuranceResourceComponent} from "./component/insurance-resource/insurance-resource.component";



const INSURANCE_ROUTES: Routes = [
  {
    path: '',
    component: InsuranceComponent,
    children: [
        {
            path: '', component : InsuranceHomeComponent
        },
        {
          path: 'contact', component : InsuranceContactComponent
        },
        {
          path: 'about', component : InsuranceAboutusComponent
        },
        {
          path: 'resources', component : InsuranceResourceComponent
        },
        {
          path: 'plans', component : InsurancePlansComponent
        }
    ]
  }
];

export const InsuranceRouting = RouterModule.forChild(INSURANCE_ROUTES);
