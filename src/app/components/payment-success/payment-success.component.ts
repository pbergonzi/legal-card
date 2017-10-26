import { Component, OnInit } from '@angular/core';
import { ConversionTrackService } from 'app/services/conversion/conversionTrack.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private conversionTrack: ConversionTrackService) {
    this.conversionTrack.trackConversion();
  }

  ngOnInit() {}

}


