import { TestBed } from '@angular/core/testing';

import { BookingAppServicesService } from './booking-app-services.service';

describe('BookingAppServicesService', () => {
  let service: BookingAppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingAppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
