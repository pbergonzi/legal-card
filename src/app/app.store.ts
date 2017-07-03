import { AppStore } from './app.store';
import { Card } from './models/card.model';

const blankCard = {dateFrom: 'pp', dateTo: 'bb', adults: 1, minors: 0, seniors: 0};

export interface AppStore {
    card: Card;
}

export const intitialState: AppStore = {
  card: blankCard
}
