import {Component, EventEmitter, Output} from '@angular/core';
import { CardService } from 'app/services/card/card.service';
import { Card } from 'app/models/card.model';
import 'rxjs/add/operator/first';

import { SimpleCard } from 'app/models/simple-card.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent {
  public card: Card;
  public buying: Boolean = false;
  @Output() onPrevStep = new EventEmitter<void>();

  constructor(
    private cardService: CardService,
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

  gotoPersonalData(){
    this.onPrevStep.emit();
  }
}
