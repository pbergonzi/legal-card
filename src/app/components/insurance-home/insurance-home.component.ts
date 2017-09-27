import { Component, OnInit } from '@angular/core';
import {CarouselConfig} from "ngx-bootstrap";
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-insurance-home',
  templateUrl: './insurance-home.component.html',
  styleUrls: ['./insurance-home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})

export class InsuranceHomeComponent implements OnInit {

  constructor(private angulartics2: Angulartics2) { }

  ngOnInit() {
    this.angulartics2.eventTrack.next({ action: 'testAction', properties: { category: 'testCategory' }});
  }

}
