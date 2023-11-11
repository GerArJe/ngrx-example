import { createAction, props } from '@ngrx/store';

import { AccountMovement } from '../../../../models/account-movement.model';

export const getAccountMovementsSuccess = createAction(
  '[Account] Get Account Movements Success',
  props<{ accountMovements: AccountMovement[] }>()
);

export const getAccountMovementsFailure = createAction(
  '[Account] Get Account Movements Failure',
  props<{ error: string }>()
);