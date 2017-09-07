import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAboutusComponent } from './insurance-aboutus.component';

describe('InsuranceAboutusComponent', () => {
  let component: InsuranceAboutusComponent;
  let fixture: ComponentFixture<InsuranceAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
