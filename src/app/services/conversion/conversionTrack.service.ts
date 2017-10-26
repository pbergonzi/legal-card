import { Injectable } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { environment } from '../../../environments/environment';

declare const google_trackConversion: any;

@Injectable()
export class ConversionTrackService {

    public trackConversion() {
        google_trackConversion({
            google_conversion_id: environment.googleConversionId, 
            google_conversion_label: environment.googleConversionLabel,
            google_remarketing_only: environment.googleRemarketingOnly
        });
    }

}