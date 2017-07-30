import { Card } from 'app/models/card.model';
import { Store } from '@ngrx/store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'app/services/language/language.service';
import { AppStore } from 'app/app.store';

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

  constructor(
    private store: Store<AppStore>,
    private translate: TranslateService,
    private language: LanguageService
  ) {
    this.store.select('card').subscribe( (data: AppStore ) => {
      this.card = data.card;
      //console.log(data.card);
    });

    this.translate.setDefaultLang(this.language.getDefaultLanguage());
    this.translate.use(this.language.getLanguage());
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch({type: SUBMIT, payload: this.card});
  }
}

