import { TestBed } from '@angular/core/testing';

import { AddonEventsService } from './addon-events.service';

describe('AddonEventsService', () => {
  let service: AddonEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
