import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceResourceComponent } from './insurance-resource.component';

describe('InsuranceResourceComponent', () => {
  let component: InsuranceResourceComponent;
  let fixture: ComponentFixture<InsuranceResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
