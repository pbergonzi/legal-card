import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})

export class InsuranceHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
