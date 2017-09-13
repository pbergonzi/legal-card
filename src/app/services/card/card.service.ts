import { Injectable, OnDestroy } from '@angular/core';
import { Card } from 'app/models/card.model';
import { Owner } from 'app/models/owner.model';
import { Package } from 'app/models/package.model';
import { Store } from '@ngrx/store';
import { AppStore } from 'app/app.store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

class Pack {
  name: string;
  price: number;
  days: number;
}

const fourthyFivePack: Pack = environment.fortyFivePack;
const yearPack: Pack = environment.yearPack;
const CARD_STORE = 'card';

@Injectable()
export class CardService {
  private cardStore: Observable<Card>;

  constructor( 
    private store: Store<AppStore>,
  ) {
    this.cardStore = this.store.select(CARD_STORE);
    const sessionCard = JSON.parse(sessionStorage.getItem('legal-card'));

    if(sessionCard){
      sessionCard.dateFrom = new Date(sessionCard.dateFrom);
      sessionCard.dateTo = new Date(sessionCard.dateTo);
      if(sessionCard.owner && sessionCard.owner.birthDate){
        sessionCard.owner.birthDate = new Date(sessionCard.owner.birthDate);
      }
      this.updateCard(sessionCard);
    }
  }

  public getCard(): Observable<Card> {
    return this.cardStore;
  }

  public calculateDays(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    return days;
  }

  public calculatePackage(card: Card): Package {
    const pack: Package = {
      dateFrom: card.dateFrom,
      isoDateFrom: card.dateFrom.toISOString(),
      dateTo: null,
      isoDateTo: null,
      price: null,
      name: null
    };

    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    const dateTo = new Date(pack.dateFrom);

    if(days <= 45){
      dateTo.setDate(dateTo.getDate() + fourthyFivePack.days);

      pack.name = fourthyFivePack.name;
      pack.price = fourthyFivePack.price;
      pack.dateTo = dateTo;
      pack.isoDateTo = dateTo.toISOString(); 
    } else {
      dateTo.setDate(dateTo.getDate() + yearPack.days);

      pack.name = yearPack.name;
      pack.price = yearPack.price;
      pack.dateTo = dateTo;
      pack.isoDateTo = dateTo.toISOString();
    }

    return pack;
  }

  /* por ahora solo calculo dias
  const price = Math.floor(days / 365) * this.yearPrice + 
                    Math.floor(days / 28) * this.monthPrice + 
                    (days % 28) * this.dayPrice;
  */
  /*
  public calculatePrice(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    if(days <= 10){

    }
  
    const price = days * this.dayPrice;                  
    return price;
  }
  */

  public isValidDateRange(card: Card){
    const now = new Date();
    now.setHours(0,0,0,0);
    return card && ( card.dateFrom >= now && card.dateTo > card.dateFrom);  
  }
  
  public isValidOwner(owner: Owner){
    return owner && owner.name && owner.passport && owner.address && owner.birthDate && owner.email;  
  }

  public updateCard(card: Card) {
    sessionStorage.setItem('legal-card',  JSON.stringify(card));
    this.store.dispatch({ type: SUBMIT, payload: card });
  }

  public resetCard() {
    sessionStorage.removeItem('legal-card');
    this.store.dispatch({ type: RESET });
  }
}
