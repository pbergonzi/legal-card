import { Card } from 'app/models/card.model';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'app/models/contact.model';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { CardService } from 'app/services/card/card.service';

@Component({
  selector: 'app-insurance-contact',
  templateUrl: './insurance-contact.component.html',
  styleUrls: ['./insurance-contact.component.scss']
})
export class InsuranceContactComponent implements OnInit {
  public card: Card;

  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    website: new FormControl(),
    description: new FormControl()
  });

  fixed = true;

  constructor(
    private fb : FormBuilder,
    private cardService: CardService
  ) {
    this.cardService
    .getCard()
    .first()
    .subscribe( (card: Card) => {
      if(card){ 
        this.card = card;
        this.card.contact = {};
      }
    });
    this.initForm();
  }

  private isValid(){
    return this.cardService.isValidContact(this.card.contact);  
  }

  initForm(){
    this.contactForm  = this.fb.group({
      name : ["", Validators.required],
      email : [""],
      website : [""],
      description : [""]
    })
  }

  ngOnInit() {
    window.onscroll = () => {
      if (document.body.scrollTop > 328) {
        this.fixed = false;
      } else {
        this.fixed = true;
      }
    }
  }

  sendMail(event) {
    event.preventDefault();
    if(this.isValid()){
      var data = new FormData();
      data.append("json", JSON.stringify(this.card.contact));
      
      fetch("http://themonstera.com/mail.php",
      {
          method: "POST",
          body: data
      })
      .then(res => res.json())
      .then(res => console.log(res))
    }
  }
}
