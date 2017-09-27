import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';
import { GoogleAnalyticsEventsService } from '../../services/analytics/ga.service';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})

export class InsuranceHomeComponent implements OnInit {

  constructor(private gaService: GoogleAnalyticsEventsService) {
    this.gaService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }

  ngOnInit() { }

}
