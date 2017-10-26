import { Injectable } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { environment } from '../../../environments/environment';

declare const ga: any;

@Injectable()
export class GoogleAnalyticsEventsService {
    constructor(){
        ga('create', environment.gaId , 'auto');
    }

    public emitEvent(eventCategory: string,
                    eventAction: string,
                    eventLabel: string = null,
                    eventValue: number = null) {
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    }

    public emitPageView(event: NavigationEnd){
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
    }
}