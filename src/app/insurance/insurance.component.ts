import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(".mobile-navigation").append($(".main-navigation .menu").clone());

    // Mobile menu toggle
    $(".menu-toggle").click(function(){
      $(".mobile-navigation").slideToggle();
    });

    $(".main-navigation .menu li>a").click(function(){
      $(".mobile-navigation").slideToggle();
    });
  }

}
