import { Card } from 'app/models/card.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})

export class PersonalDataComponent {
  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPrevStep = new EventEmitter<void>();

  public card: Card;
  submitted: boolean = false

  constructor(
    private router: Router,
    private cardService: CardService
  ) {
    this.cardService
      .getCard()
      .first()
      .subscribe( (card: Card) => {
        if(card){
          this.card = card;
        }
      });
  }

  private isValid(){
    return this.cardService.isValidDateRange(this.card) && this.cardService.isValidOwner(this.card.owner);
  }

  gotoProductSelection(){
    this.onPrevStep.emit();
  }

  gotoCheckout() {
    if(this.isValid()){
      this.cardService.updateCard(this.card);
      this.onNextStep.emit();
    } else {
      this.submitted = true
      console.log('The card is not valid');
    }
  }
}
