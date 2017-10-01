import { Injectable, OnDestroy } from '@angular/core';
import { Card } from 'app/models/card.model';
import { SimpleCard } from 'app/models/simple-card.model';
import { Owner } from 'app/models/owner.model';
import { Contact } from 'app/models/contact.model';
import { Package } from 'app/models/package.model';
import { Store } from '@ngrx/store';
import { AppStore } from 'app/app.store';
import { SUBMIT, RESET } from 'app/reducers/card.reducer';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

const zlib = require('zlib');

class Pack {
  name: string;
  price: number;
  days: number;
}

const fourthyFivePack: Pack = environment.fortyFivePack;
const yearPack: Pack = environment.yearPack;
const CARD_STORE = 'card';

@Injectable()
export class CardService {
  private cardStore: Observable<Card>;
  
  constructor( 
    private store: Store<AppStore>,
  ) {
    this.cardStore = this.store.select(CARD_STORE);
    const sessionCard = JSON.parse(sessionStorage.getItem('legal-card'));

    if(sessionCard && sessionCard.dateFrom && sessionCard.dateTo){
      sessionCard.dateFrom = new Date(sessionCard.dateFrom);
      sessionCard.dateTo = new Date(sessionCard.dateTo);

      if(sessionCard.owner && sessionCard.owner.birthDate){
        sessionCard.owner.birthDate = new Date(sessionCard.owner.birthDate);
      }

      if(sessionCard.package && sessionCard.package.dateFrom && sessionCard.package.dateTo){
        sessionCard.package.dateFrom = new Date(sessionCard.package.dateFrom);
        sessionCard.package.dateTo = new Date(sessionCard.package.dateTo);
      
      }

      this.updateCard(sessionCard);
    }
  }

  public getCard(): Observable<Card> {
    return this.cardStore;
  }

  public calculateDays(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    return days;
  }

  public compressSimpleCard(scard: SimpleCard):Observable<string>{    
    return Observable.create(observer => {
      const buf = new Buffer(JSON.stringify(scard), 'utf-8'); 
      
      zlib.gzip(buf, (error, result) => {
        if (error) throw error;
        observer.next(result.toString('base64'));
        observer.complete();
      });

      return () => {};
    });
  }

  public deCompressSimpleCard(strSCard: string): Observable<SimpleCard>{
    return Observable.create(observer => {
      const buf = new Buffer(strSCard, 'base64');

      zlib.gunzip(buf, (error, buffer) => {
        if (error) throw error;
        observer.next(buffer.toString('utf-8'));
        observer.complete();
      });

      return () => {};
    });
  }

  public toSimple(card: Card): SimpleCard{
    const scard: SimpleCard = {};
    scard.dateFrom = card.package.dateFrom;
    scard.dateTo = card.package.dateTo;
    scard.packageName = card.package.name;
    scard.ownerEmail = card.owner.email;
    scard.ownerName = card.owner.name;
    scard.ownerPassport = card.owner.passport;
    
    return scard;
  }

  getFortyFiveDaysPackage(card: Card): Package {
    const pack: Package = {
      dateFrom: card.dateFrom,
      isoDateFrom: card.dateFrom.toISOString(),
      dateTo: null,
      isoDateTo: null,
      price: null,
      name: null
    };

    const dateTo = new Date(pack.dateFrom);

    dateTo.setDate(dateTo.getDate() + fourthyFivePack.days);
    
    pack.name = fourthyFivePack.name;
    pack.price = fourthyFivePack.price;
    pack.dateTo = dateTo;
    pack.isoDateTo = dateTo.toISOString();

    return pack;
  }

  getYearPackage(card: Card): Package {
    const pack: Package = {
      dateFrom: card.dateFrom,
      isoDateFrom: card.dateFrom.toISOString(),
      dateTo: null,
      isoDateTo: null,
      price: null,
      name: null
    };

    const dateTo = new Date(pack.dateFrom);

    dateTo.setDate(dateTo.getDate() + yearPack.days);
    
    pack.name = yearPack.name;
    pack.price = yearPack.price;
    pack.dateTo = dateTo;
    pack.isoDateTo = dateTo.toISOString();

    return pack;
  }

  public calculatePackage(card: Card): Package {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    if(days <= 45){
      return this.getFortyFiveDaysPackage(card);
    } else {
      return this.getYearPackage(card);
    }
  }

  /* por ahora solo calculo dias
  const price = Math.floor(days / 365) * this.yearPrice + 
                    Math.floor(days / 28) * this.monthPrice + 
                    (days % 28) * this.dayPrice;
  */
  /*
  public calculatePrice(card: Card): number {
    const days =  1 + Math.floor(( card.dateTo.getTime() - card.dateFrom.getTime() ) / 86400000); 
    
    if(days <= 10){

    }
  
    const price = days * this.dayPrice;                  
    return price;
  }
  */
/*
  public saveCard(card: Card){
    console.log(card);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const req = this.http.post(environment.cardUrl, card, {responseType: 'text',headers: headers})
    .subscribe((res) => {
        //do something with the response here
        console.log(res);
    });
  }*/

  public isValidDateRange(card: Card){
    const now = new Date();
    now.setHours(0,0,0,0);
    return card && ( card.dateFrom >= now && card.dateTo > card.dateFrom);  
  }
  
  public isValidOwner(owner: Owner){
    return owner && owner.name && owner.passport && owner.email;  
  }

  public isValidContact(contact: Contact) {
    return contact && contact.name && contact.email && contact.description;
  }

  public updateCard(card: Card) {
    sessionStorage.setItem('legal-card',  JSON.stringify(card));
    this.store.dispatch({ type: SUBMIT, payload: card });
  }

  public resetCard() {
    sessionStorage.removeItem('legal-card');
    this.store.dispatch({ type: RESET });
  }
}
