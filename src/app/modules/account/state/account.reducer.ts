import { createReducer, on } from '@ngrx/store';

import { AccountApiActions } from './actions';
import { AccountMovement } from '../../../models/account-movement.model';

export interface AccountState {
  accountMovements: AccountMovement[];
  error: string;
}

const initialState: AccountState = {
  accountMovements: [],
  error: '',
};

export const accountReducer = createReducer<AccountState>(
    initialState,
    on(
      AccountApiActions.getAccountMovementsSuccess,
      (state, { accountMovements }): AccountState  => {
       
        return {
          ...state,
          accountMovements
        }
      }
    ),
    on(AccountApiActions.getAccountMovementsFailure, (state, { error }) => ({
      ...state,
      error,
    }))
  );
