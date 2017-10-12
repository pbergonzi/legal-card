import { Card } from 'app/models/card.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss']
})

export class ProductSelectionComponent implements OnInit {
  public card: Card;
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

  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getLeftSpace() {
    if (window.screen.width > 1023) {
      return document.querySelector('.container').clientWidth + (window.screen.width - document.querySelector('.container').clientWidth) / 2;
    } else {
      return document.querySelector('.container').getBoundingClientRect().width;
    }
  }

  choose(time) {
    if(time === 'year') {
      this.card.package = this.cardService.getYearPackage(this.card);
    } else {
      this.card.package = this.cardService.getFortyFiveDaysPackage(this.card);
    }
  }

  gotoPersonalData(){
    this.card.package = this.cardService.getTestPackage(this.card);
    this.cardService.updateCard(this.card);
    this.router.navigate(['/personal-data']);
  }
}
