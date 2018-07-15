import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { GoogleAnalyticsEventsService } from 'app/services/analytics/ga.service';
import { Card } from 'app/models/card.model';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})
export class PaypalComponent implements OnInit {
  actionUrl = environment.paypalAction;
  buttonId = environment.paypalButton;
  public disabled: boolean = false;
  public card: Card;
  private cardSub: Subscription;
  
  constructor(
    private cardService: CardService,
    private gaService: GoogleAnalyticsEventsService
  ) {
    this.cardSub = this.cardService
      .getCard()      
      .subscribe( (card: Card) => { 
        if(card){
          this.card = card;
        }
      });
  }

  onSubmit(form) {
    console.log(this.disabled)
    if (!this.disabled) {
      this.disabled = true
      form.submit();
      this.gaService.emitEvent("wizzard", "goToPaypal", this.card.package.name, this.card.package.price);
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.cardSub.unsubscribe();
  }
}
