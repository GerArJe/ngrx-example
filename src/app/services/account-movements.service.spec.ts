import { TestBed } from '@angular/core/testing';

import { AccountMovementsService } from './account-movements.service';

describe('AccountMovementsService', () => {
  let service: AccountMovementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountMovementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
