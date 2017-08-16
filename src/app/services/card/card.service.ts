import { Injectable } from '@angular/core';
import { Card } from 'app/models/card.model';
import { Owner } from 'app/models/owner.model';
import { Store } from '@ngrx/store';
import { AppStore } from 'app/app.store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';

const CARD_STORE = 'card';

@Injectable()
export class CardService {
  private cardStore: Observable<Card>;
    
  private dayPrice: number = 10;
  private monthPrice: number = 120;
  private yearPrice: number = 1200;

  constructor( 
    private store: Store<AppStore>
  ) {
    this.cardStore = this.store.select(CARD_STORE);
    const sessionCard = JSON.parse(sessionStorage.getItem('legal-card'));
    if(sessionCard){
      sessionCard.dateFrom = new Date(sessionCard.dateFrom);
      sessionCard.dateTo = new Date(sessionCard.dateTo);
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

  public calculatePrice(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    /* por ahora solo calculo dias
    const price = Math.floor(days / 365) * this.yearPrice + 
                      Math.floor(days / 28) * this.monthPrice + 
                      (days % 28) * this.dayPrice;
    */
    const price = days * this.dayPrice;                  
    return price;
  }

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
