import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceContactComponent } from './insurance-contact.component';

describe('InsuranceContactComponent', () => {
  let component: InsuranceContactComponent;
  let fixture: ComponentFixture<InsuranceContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
