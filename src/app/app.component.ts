import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'app';

  constructor() {}
  
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
