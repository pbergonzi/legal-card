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
  }

  public getCard(): Observable<Card> {
    return this.cardStore;
  }

  public calculatePrice(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    const price = Math.floor(days / 365) * this.yearPrice + 
                      Math.floor(days / 28) * this.monthPrice + 
                      (days % 28) * this.dayPrice;
                      
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
    this.store.dispatch({ type: SUBMIT, payload: card });
  }

  public resetCard() {
    this.store.dispatch({ type: RESET });
  }
}
