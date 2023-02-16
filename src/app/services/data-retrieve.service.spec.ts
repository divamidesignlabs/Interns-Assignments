import { TestBed } from '@angular/core/testing';

import { DataRetrieveService } from './data-retrieve.service';

describe('DataRetrieveService', () => {
  let service: DataRetrieveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRetrieveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
