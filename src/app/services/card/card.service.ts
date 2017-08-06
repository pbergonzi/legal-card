import { Injectable } from '@angular/core';
import { Card } from 'app/models/card.model';
import { Store } from '@ngrx/store';
import { AppStore } from 'app/app.store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';

const CARD_STORE = 'card';

@Injectable()
export class CardService {
  private cardStore: Observable<Card>;

  constructor( 
    private store: Store<AppStore>
  ) {
    this.cardStore = this.store.select(CARD_STORE);
  }

  public getCard(): Observable<Card> {
    return this.cardStore;
  }

  updateCard(card: Card) {
    this.store.dispatch({ type: SUBMIT, payload: card });
  }

  resetCard() {
    this.store.dispatch({ type: RESET });
  }
}
