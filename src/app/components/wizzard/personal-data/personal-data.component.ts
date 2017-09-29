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

  ngOnInit() {}

  private isValid(){
    return this.cardService.isValidDateRange(this.card) && this.cardService.isValidOwner(this.card.owner);  
  }

  gotoProductSelection(){
    this.router.navigate(['/product-selection']);
  }

  onSubmit() {
    if(this.isValid()){
      this.cardService.updateCard(this.card);
      this.router.navigate(['/checkout']);
    } else {
      console.log('The card is not valid');
    }
  }
  
  gotoCheckout(){
    this.router.navigate(['/checkout']);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
