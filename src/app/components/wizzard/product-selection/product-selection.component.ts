import { Card } from 'app/models/card.model';
import { Component, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})

export class ProductSelectionComponent {
  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPrevStep = new EventEmitter<void>();

  public card: Card;
  public fortyFivePrice = environment.fortyFivePack.price;
  public yearPrice = environment.yearPack.price;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private cardService: CardService,
    private router: Router
  ) {
    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => {
        this.card = card;
      });
  }

  choose(time) {
    if(time === 'year') {
      this.card.package = this.cardService.getYearPackage(this.card);
    } else {
      this.card.package = this.cardService.getFortyFiveDaysPackage(this.card);
    }
  }

  gotoPersonalData(){
    this.cardService.updateCard(this.card);
    this.onNextStep.emit();
  }

  gotoQuotient(){
    this.onPrevStep.emit();
  }
}
