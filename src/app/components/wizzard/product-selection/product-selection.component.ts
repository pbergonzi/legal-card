import { Component, OnInit } from '@angular/core';
import { Card } from 'app/models/card.model';
import { Store } from '@ngrx/store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';
import { AppStore } from 'app/app.store';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})
export class ProductSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
