import { TestBed } from '@angular/core/testing';

import { AccountMovementEntityService } from './account-movement-entity.service';

describe('AccountMovementEntityService', () => {
  let service: AccountMovementEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountMovementEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
