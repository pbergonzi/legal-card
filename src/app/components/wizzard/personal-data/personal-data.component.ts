import { Card } from 'app/models/card.model';
import { SimpleCard } from 'app/models/simple-card.model';
import { Owner } from 'app/models/owner.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})

export class PersonalDataComponent implements OnInit {
  public card: Card;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
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

  getLeftSpace() {
    if (window.screen.width > 1023) {
      return document.querySelector('.container').clientWidth + (window.screen.width - document.querySelector('.container').clientWidth) / 2;
    } else {
      return null
    }
  }

  ngOnInit() {}

  private isValid(){
    return this.cardService.isValidDateRange(this.card) && this.cardService.isValidOwner(this.card.owner);  
  }

  gotoProductSelection(){
    this.router.navigate(['/product-selection']);
  }

  gotoCheckout() {
    if(this.isValid()){
      this.cardService.updateCard(this.card);
      this.router.navigate(['/checkout']);
    } else {
      this.submitted = true
      console.log('The card is not valid');
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
