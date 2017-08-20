import { Card } from 'app/models/card.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { MyDatePicker, IMyDpOptions, IMyDateModel, IMyDate } from 'mydatepicker';

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

  public model = {
    dateFrom: this.formatModelDate(new Date()),
    dateTo: this.formatModelDate(new Date())
  };

  constructor(
    private router: Router,
    private cardService: CardService
  ) {
    const defaultTo = new Date();
    defaultTo.setDate(defaultTo.getDate() + 5);
    this.model.dateTo = this.formatModelDate(defaultTo);

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
    return  {date: { year: date.getFullYear(), 
              month: date.getMonth() + 1, 
              day: date.getDate() 
            }}; 
  }

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };
  
  public onDateFromChanged(event: IMyDateModel) {
    //console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    this.selectedDate({
      start: new Date(event.jsdate),
      end: this.card.dateTo
    });
  }
  
  public onDateToChanged(event: IMyDateModel) {
    //console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    this.selectedDate({
      start: this.card.dateFrom,
      end: new Date(event.jsdate)
    });
  }
  
  
  public selectedDate(value: any) {
      this.isPristine = false;
      const now = new Date();
      now.setHours(0,0,0,0);
      this.card.dateFrom = value.start;
      this.card.dateTo = value.end;
      this.card.dateFrom.setHours(0,0,0,0);
      this.card.dateTo.setHours(0,0,0,0);
      this.isValid = this.card.dateFrom >= now && 
                      this.card.dateTo > this.card.dateFrom;
  }

  onSubmit() {
    if(this.isValid){
      this.card.price = this.cardService.calculatePrice(this.card);
      this.cardService.updateCard(this.card);
      this.router.navigate(['/product-selection']);
    } else {
      console.log('The card is not valid');
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

