import { AppStore } from '../app.store';
import { Card } from '../models/card.model';
import { ActionReducer, Action } from '@ngrx/store';

export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';

const blankCard = {dateFrom: 'pp', dateTo: 'bb', adults: 1, minors: 0, seniors: 0};
const intitialState: AppStore = {
  card: blankCard
}


export function cardReducer(state = intitialState, action: Action): AppStore {
  switch (action.type) {
    case SUBMIT:
      return Object.assign({}, state, action.payload);

    case RESET:
      return intitialState;

    default:
      return state;
  }
}
