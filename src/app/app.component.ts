import { Component, OnInit } from '@angular/core';
const { version: appVersion, name: appName } = require('../../package.json');

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
    console.log(appName +  ' : ' + appVersion);
    
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
