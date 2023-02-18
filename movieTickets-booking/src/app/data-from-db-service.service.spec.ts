import { TestBed } from '@angular/core/testing';

import { DataFromDBServiceService } from './data-from-db-service.service';

describe('DataFromDBServiceService', () => {
  let service: DataFromDBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromDBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
