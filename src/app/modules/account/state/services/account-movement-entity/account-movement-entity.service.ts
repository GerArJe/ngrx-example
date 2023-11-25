import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { AccountMovement } from '../../../../../models/account-movement.model';

@Injectable({
  providedIn: 'root'
})
export class AccountMovementEntityService extends EntityCollectionServiceBase<AccountMovement> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('AccountMovement', serviceElementsFactory);
  }
}
