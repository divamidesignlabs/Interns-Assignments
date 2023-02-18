import { TestBed } from '@angular/core/testing';

import { MoviebookingService } from './moviebooking.service';

describe('MoviebookingService', () => {
  let service: MoviebookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviebookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
