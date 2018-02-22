import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Card } from 'app/models/card.model';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';

import { SimpleCard } from "app/models/simple-card.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  public card: Card;
  public buying: boolean = false

  constructor(
    private cardService: CardService,
    private router: Router
  ) {

    this.cardService
      .getCard()
      .first()
      .subscribe( (card: Card) => {
        if(card){
          this.card = card;          
          const simpleCard: SimpleCard = this.cardService.toSimple(this.card);
          this.cardService.compressSimpleCard(simpleCard).first().subscribe( csCard => {
            if(csCard){
              this.card.hash = csCard;
              this.cardService.updateCard(this.card);
            }
          });
        }
      });
  }

  buy() {
    this.buying = true
  }

  getLeftSpace() {
    if (window.screen.width > 1023) {
      return document.querySelector('.container').clientWidth + (window.screen.width - document.querySelector('.container').clientWidth) / 2;
    } else {
      return null
    }
  }

  gotoPersonalData(){
    this.router.navigate(['/personal-data']);
  }

  gotoProductSelection(){
    this.router.navigate(['/product-selection']);
  }

  ngOnInit() {}

  ngOnDestroy() {}

}
