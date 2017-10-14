import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-header',
  templateUrl: 'insurance-header.component.html',
  styleUrls: ['insurance-header.component.scss']
})
export class InsuranceHeaderComponent implements OnInit {

  constructor() { }
  public visibleMobileMenu: boolean = false;

  toogleMenu() {
    this.visibleMobileMenu = !this.visibleMobileMenu
  }

  ngOnInit() {
  }

}
