import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Card } from 'app/models/card.model';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  actionUrl = environment.paypalAction;
  buttonId = environment.paypalButton;
  returnUrl = environment.paypalReturn;
  cancelUrl = environment.paypalCancel;
  notificationUrl = environment.paypalNotification;
  btnImg = environment.paypalButtonImg;

  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public card: Card;

  constructor(
    private cardService: CardService
  ) {
    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => { 
        if(card){
          this.card = card;
        }
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
