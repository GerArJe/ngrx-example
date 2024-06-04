import { createActionGroup, props } from '@ngrx/store';

import { AccountMovement } from '../../../../models/account-movement.model';

export const AccountApiActions = createActionGroup({
  source: 'Account API Actions',
  events: {
    getAccountMovementsSuccess: props<{
      accountMovements: AccountMovement[];
    }>(),
    getAccountMovementsFailure: props<{ error: string }>(),
  },
});
