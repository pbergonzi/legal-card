import { Card } from 'app/models/card.model';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
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
  public daterange: any = {};
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  public step: number = 1;
  public model = {
    dateFrom: this.formatModelDate(new Date()),
    dateTo: this.formatModelDate(this.defaultTo())
  };

  constructor(
    private router: Router,
    private cardService: CardService,
  ) {

    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => {
        if(card){
          this.card = card;
          card.dateFrom ?
            this.model.dateFrom = this.formatModelDate(card.dateFrom):
            card.dateFrom = new Date();
          card.dateTo ?
            this.model.dateTo = this.formatModelDate(card.dateTo):
            card.dateTo = this.defaultTo();
        }
      });
  }

  private formatModelDate(date: Date): any{
    return  {date: { year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            }};
  }

  private defaultTo(): Date {
    const auxNow = new Date();
    auxNow.setDate(auxNow.getDate() + 5);
    return auxNow;
  }

  private oneYearFromNow(): Date {
    const auxNow = new Date();
    auxNow.setDate(auxNow.getDate() + 365);
    return auxNow;
  }

  private yesterday(): Date {
    const auxNow = new Date();
    auxNow.setDate(auxNow.getDate() - 1);
    return auxNow;
  }

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm/dd/yyyy',
    disableUntil: this.formatModelDate(this.yesterday()).date,
    disableSince: this.formatModelDate(this.oneYearFromNow()).date
  };

  public onDateFromChanged(event: IMyDateModel) {
    this.selectedDate({
      start: new Date(event.jsdate),
      end: this.card.dateTo
    });
  }

  public onDateToChanged(event: IMyDateModel) {
    this.selectedDate({
      start: this.card.dateFrom,
      end: new Date(event.jsdate)
    });
  }


  public selectedDate(value: any) {
      const now = new Date();
      now.setHours(0,0,0,0);
      this.card.dateFrom = value.start;
      this.card.dateTo = value.end;
      this.card.dateFrom.setHours(0,0,0,0);
      this.card.dateTo.setHours(0,0,0,0);
      this.isValid = this.card.dateFrom >= now &&
                      this.card.dateTo > this.card.dateFrom;
  }

  onPersonalData() {
    this.step = 3;
  }

  onCheckout() {
    this.step = 4;
  }

  onSubmit() {
    if (this.step !== 1) {
      return false;
    }
    if(this.isValid){
      this.card.package = this.cardService.calculatePackage(this.card);
      this.cardService.updateCard(this.card);
      this.step = 2;
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

