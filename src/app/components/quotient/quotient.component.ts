import { Card } from 'app/models/card.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { MyDatePicker, IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'app-form-quotient',
  templateUrl: './quotient.component.html',
  styleUrls: ['./quotient.component.scss']
})

export class QuotientComponent implements OnInit {
  public card: Card;
  public isValid: boolean = true;
  public isPristine: boolean = true;
  public daterange: any = {};
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;

  ////////// TEST PICKER //////////////
  /**/  @ViewChild('dateFromInput') dateFromInput: MyDatePicker;
  /**/  @ViewChild('dateToInput') dateToInput: MyDatePicker;
  /**/
  /**/  private myDatePickerOptions: IMyDpOptions = {
  /**/    // other options...
  /**/    dateFormat: 'dd/mm/yyyy'
  /**/  };
  /**/
  /**/  // Initialized to specific date (09.10.2018).
  /**/  private model = {
  /**/    dateFrom: this.formatModelDate(new Date()),
  /**/    dateTo: this.formatModelDate(new Date())
  /**/  };
  /**/
  /**/  onDateFromChanged(event: IMyDateModel) {
  /**/    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  /**/    this.selectedDate({
  /**/      start: new Date(event.jsdate),
  /**/      end: this.card.dateTo
  /**/    });
  /**/  }
  /**/
  /**/  onDateToChanged(event: IMyDateModel) {
  /**/    console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
  /**/    this.selectedDate({
  /**/      start: this.card.dateFrom,
  /**/      end: new Date(event.jsdate)
  /**/    });
  /**/  }
  /////////////////////////////////////

  constructor(
    private router: Router,
    private cardService: CardService
  ) {
    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => { 
        if(card){
          this.card = card;
          if(card.dateFrom)
            this.model.dateFrom = this.formatModelDate(card.dateFrom);
          if(card.dateTo)
            this.model.dateTo = this.formatModelDate(card.dateTo);
          if(card.dateFrom && card.dateTo)
            this.isPristine = false;
        }
      });
  }
  
  private formatModelDate(date: Date): any{
    return { date:  
              { year: date.getFullYear(), 
                month: date.getMonth() + 1, 
                day: date.getDate() 
              } 
            }
  }

  public options: any = {
      locale: { format: 'YYYY-DD-MM' },
      alwaysShowCalendars: false,
  };

  public selectedDate(value: any) {
      this.isPristine = false;
      const now = new Date();
      now.setHours(0,0,0,0);
      this.card.dateFrom = value.start;
      this.card.dateTo = value.end;
      
      this.isValid = this.card.dateFrom >= now && 
                      this.card.dateTo > this.card.dateFrom;
  }

  ngOnInit() {}

  onSubmit() {
    if(this.isValid){
      this.card.price = this.cardService.calculatePrice(this.card);
      this.cardService.updateCard(this.card);
      this.router.navigate(['/product-selection']);
    } else {
      console.log('The card is not valid');
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

