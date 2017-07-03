import { intitialState } from './../app.store';
import { Card } from '../models/card.model';
import { Store, provideStore } from '@ngrx/store';
import { SUBMIT, RESET } from '../reducers/card.reducer';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppStore } from '../app.store';

interface AppState {
  card: Card;
}

@Component({
  selector: 'app-form-quotient',
  templateUrl: './quotient.component.html',
  styleUrls: ['./quotient.component.css']
})

export class QuotientComponent implements OnInit {
  public card: Card;

  constructor(private store: Store<AppStore>) {
    this.store.select('cardReducer')
      .subscribe( (data: AppStore ) => {
        this.card = data.card;
        console.log(data.card);
      });
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch({type: SUBMIT, payload: this.card});
  }
}

