import { TestBed, inject } from '@angular/core/testing';

import { ConversionTrackService } from './conversionTrack.service';

describe('ConversionTrackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionTrackService]
    });
  });

  it('should be created', inject([ConversionTrackService], (service: ConversionTrackService) => {
    expect(service).toBeTruthy();
  }));
});
