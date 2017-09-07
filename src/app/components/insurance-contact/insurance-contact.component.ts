import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-insurance-contact',
  templateUrl: './insurance-contact.component.html',
  styleUrls: ['./insurance-contact.component.scss']
})
export class InsuranceContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    website: new FormControl(),
    description: new FormControl()

  });

  constructor(private fb : FormBuilder) {
      this.initForm()
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
  }

  sendMail(event) {
    event.preventDefault();
    console.log('Submitted value from the contact form goes here ');
    console.log(this.contactForm.value);
    alert('Thank you for submitting the contact form');
    this.initForm();
  }
}
