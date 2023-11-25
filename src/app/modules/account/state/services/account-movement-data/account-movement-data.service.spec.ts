import { TestBed } from '@angular/core/testing';

import { AccountMovementDataService } from './account-movement-data.service';

describe('AccountMovementDataService', () => {
  let service: AccountMovementDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountMovementDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
