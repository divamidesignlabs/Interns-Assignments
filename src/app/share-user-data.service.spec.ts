import { TestBed } from '@angular/core/testing';

import { ShareUserDataService } from './share-user-data.service';

describe('ShareUserDataService', () => {
  let service: ShareUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
