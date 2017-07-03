import { AppStore, intitialState } from '../app.store';
import { Card } from '../models/card.model';
import { ActionReducer, Action } from '@ngrx/store';

export const SUBMIT = 'SUBMIT';
export const RESET = 'RESET';

export const cardReducer: ActionReducer<AppStore> = (state = intitialState, action: Action) => {
  switch (action.type) {
    case SUBMIT:
      return Object.assign({}, state, action.payload);

    case RESET:
      return intitialState;

    default:
      return state;
  }
}
