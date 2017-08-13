import { Card } from 'app/models/card.model';
import { Owner } from 'app/models/owner.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { CardService } from 'app/services/card/card.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})

export class PersonalDataComponent implements OnInit {
  private card: Card;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  
  private isValid(){
    return this.cardService.isValidDateRange(this.card) && this.cardService.isValidOwner(this.card.owner);  
  }

  constructor(
    private router: Router,
    private cardService: CardService,
    private db: AngularFireDatabase
  ) { 
    this.cardService
      .getCard()
      .takeUntil(this.ngUnsubscribe)
      .subscribe( (card: Card) => this.card = card );
  }

  onSubmit() {
    if(this.isValid()){
      this.cardService.updateCard(this.card);
      console.log(this.card);
      //this.router.navigate(['/checkout']);
    } else {
      console.log('The card is not valid');
    }
  }
  ngOnInit() {
  }
  
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
