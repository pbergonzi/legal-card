import { AppStore } from '../app.store';
import { Card } from '../models/card.model';
import { ActionReducer, Action } from '@ngrx/store';

export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';

const intitialState: Card = { dateFrom: null, dateTo: null, owner: {} };

export function cardReducer(state = intitialState, action: Action): Card {
  switch (action.type) {
    case SUBMIT:
      return Object.assign({}, state, action.payload);

    case RESET:
      return intitialState;

    default:
      return state;
  }
}
