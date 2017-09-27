import { TestBed, inject } from '@angular/core/testing';

import { GoogleAnalyticsEventsService } from './ga.service';

describe('GoogleAnalyticsEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAnalyticsEventsService]
    });
  });

  it('should be created', inject([GoogleAnalyticsEventsService], (service: GoogleAnalyticsEventsService) => {
    expect(service).toBeTruthy();
  }));
});
