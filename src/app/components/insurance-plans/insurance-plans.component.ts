import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-plans',
  templateUrl: './insurance-plans.component.html',
  styleUrls: ['./insurance-plans.component.scss']
})
export class InsurancePlansComponent implements OnInit {

  planList : any[] = DummyData;

  filterBy : string = 'all';

  constructor() { }

  ngOnInit() {
  }

}


export const DummyData = [
  {
      icon : 'icon-sofa',
      type : 'shopping-center',
      title : 'Safe Hohurse',
      para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  },
  {
      icon : 'icon-pool',
      type : 'skyscraper',
      title : 'Happy Holiday',
      para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  },
  {
    icon : 'icon-nurse',
    type : 'apartment',
    title : 'Medical 24',
    para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  },
  {
    icon : 'icon-weigher',
    type : 'shopping-center',
    title : 'Financial Balance',
    para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  },
  {
    icon : 'icon-car',
    type : 'apartment',
    title : 'Car Protect',
    para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  },
  {
    icon : 'icon-shirt',
    type : 'skyscraper',
    title : 'Business Insurance',
    para : 'Etiam aliquam ante in mattis molestie. Vivamus in laoreet eros. Proin tempus velit dui lobortis justo laoreet nes phasellus luctus neque.'
  }

];


