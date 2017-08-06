import { Card } from 'app/models/card.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';

@Component({
  selector: 'app-form-quotient',
  templateUrl: './quotient.component.html',
  styleUrls: ['./quotient.component.css']
})

export class QuotientComponent implements OnInit {
  public card: Card;
  public isValid: boolean = true;
  public isPristine: boolean = true;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public daterange: any = {};
  
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  constructor(
    private cardService: CardService
  ) {
    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => this.card = card );
  }
  
  public options: any = {
      locale: { format: 'YYYY-DD-MM' },
      alwaysShowCalendars: false,
  };

  public selectedDate(value: any) {
      this.isPristine = false;
      const now = new Date();
      this.card.dateFrom = value.start.toDate();
      this.card.dateTo = value.end.toDate();
      
      this.isValid = this.card.dateFrom > now && 
                      this.card.dateTo > this.card.dateFrom;
  }

  ngOnInit() {}

  onSubmit() {
    if(this.isValid){
      this.cardService.updateCard(this.card);
    } else {
      console.log('la tarjeta no vale');
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
