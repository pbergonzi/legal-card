import { Component, OnInit } from '@angular/core';
import { CardService } from 'app/services/card/card.service';
import { Card } from 'app/models/card.model';
import { Router } from '@angular/router';

import 'rxjs/add/operator/first';

@Component({
  selector: 'app-insurance-plans',
  templateUrl: './insurance-plans.component.html',
  styleUrls: ['./insurance-plans.component.scss']
})
export class InsurancePlansComponent implements OnInit {
  card: Card;

  constructor(
    private router: Router,
    private cardService: CardService
  ) { 
    this.cardService
    .getCard()
    .first()
    .subscribe( (card: Card) => { 
      if(card) { this.card = card; }
    });
  }

  ngOnInit() {
  }

  private buildPack(days: number){
    const auxNow = new Date();
    const dateTo = new Date();
    dateTo.setDate(auxNow.getDate() + days);
    
    this.card.dateFrom = auxNow;
    this.card.dateTo = dateTo;

    this.card.package = this.cardService.calculatePackage(this.card);

    this.cardService.updateCard(this.card);

    this.router.navigate(['/product-selection']);
  }

  yearPack() { this.buildPack(365); }

  fortyFivePack() { this.buildPack(20); }

}