import { TestBed } from '@angular/core/testing';

import { QarmaServiceService } from './qarma.service.service';

describe('QarmaServiceService', () => {
  let service: QarmaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QarmaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
