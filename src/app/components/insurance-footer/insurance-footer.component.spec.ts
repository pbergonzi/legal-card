import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFooterComponent } from './insurance-footer.component';

describe('InsuranceFooterComponent', () => {
  let component: InsuranceFooterComponent;
  let fixture: ComponentFixture<InsuranceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
