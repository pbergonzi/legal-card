import { Card } from 'app/models/card.model';
import { Owner } from 'app/models/owner.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { MyDatePicker, IMyDpOptions, IMyDate, IMyDateModel } from 'mydatepicker';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})

export class PersonalDataComponent implements OnInit {
  public card: Card;
  public birthDate: IMyDate;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  private isValid(){
    return this.cardService.isValidDateRange(this.card) && this.cardService.isValidOwner(this.card.owner);  
  }

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
          if(this.card.owner && 
            this.card.owner.birthDate && 
            this.card.owner.birthDate instanceof Date){
              this.birthDate = this.formatModelDate(this.card.owner.birthDate);
          } else {
            const now = new Date();
            now.setFullYear( now.getFullYear() - 18 );
            this.birthDate = this.formatModelDate(now);
          }
        }
      });
  }

  ngOnInit() {}

  onSubmit() {
    if(this.isValid()){
      this.cardService.saveCardToDb(this.card);
      this.cardService.updateCard(this.card);
      //console.log(this.card);
      //this.router.navigate(['/checkout']);
    } else {
      console.log('The card is not valid');
    }
  }
  
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd/mm/yyyy'
  };

  public onBirthDateChanged(event: IMyDateModel) {
    //console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    this.birthDate = event.date;
    this.card.owner.birthDate = event.jsdate;
  }

  private formatModelDate(date: Date): any{
    return { date:  
              { year: date.getFullYear(), 
                month: date.getMonth() + 1, 
                day: date.getDate() 
              } 
            }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
