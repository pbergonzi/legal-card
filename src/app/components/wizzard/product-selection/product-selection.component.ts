import { Card } from 'app/models/card.model';
import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})

export class ProductSelectionComponent implements OnDestroy{
  @Output() onNextStep = new EventEmitter<void>();
  @Output() onPrevStep = new EventEmitter<void>();

  public card: Card;
  public fortyFivePrice = environment.fortyFivePack.price;
  public yearPrice = environment.yearPack.price;
  public fortyFivePricePromo = environment.fortyFivePackPromo.price;
  public yearPricePromo = environment.yearPackPromo.price;
  
  private cardSub: Subscription;
  
  constructor(
    private cardService: CardService,
    private router: Router
  ) {
    this.cardSub = this.cardService
      .getCard()
      //.first(c => c !=null)
      .subscribe( (card: Card) => {
        this.card = card;
      });
  }

  choose(time) {
    if(this.card.promoCode){
      if(time === 'year') {
        this.card.package = this.cardService.getYearPackagePromo(this.card);
      } else {
        this.card.package = this.cardService.getFortyFiveDaysPackagePromo(this.card);
      }  
    } else {
      if(time === 'year') {
        this.card.package = this.cardService.getYearPackage(this.card);
      } else {
        this.card.package = this.cardService.getFortyFiveDaysPackage(this.card);
      }
    }
  }

  gotoPersonalData(){
    this.cardService.updateCard(this.card);
    this.onNextStep.emit();
  }

  gotoQuotient(){
    this.onPrevStep.emit();
  }

  ngOnDestroy(): void {
    this.cardSub.unsubscribe();
  }
}
