import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Card } from 'app/models/card.model';
import { Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

export class CheckoutComponent implements OnInit {
  public card:Card;
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

  gotoPersonalData(){
    this.router.navigate(['/personal-data']);
  }
  
  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
