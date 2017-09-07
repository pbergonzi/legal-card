import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlansComponent } from './insurance-plans.component';

describe('InsurancePlansComponent', () => {
  let component: InsurancePlansComponent;
  let fixture: ComponentFixture<InsurancePlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancePlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
