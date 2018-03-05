import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 10000, noPause: true}}]
})

export class InsuranceHomeComponent implements OnInit {
  actualPage: any = 1;

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.actualPage = this.actualPage + 1;
      if (this.actualPage > 3) {
        this.actualPage = 1;
      }
    }, 5000);
  }

}
