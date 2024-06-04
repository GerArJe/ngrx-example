import { createFeature, createReducer, on } from '@ngrx/store';

import { AccountMovement } from '../../../../models/account-movement.model';
import { AccountApiActions } from '../actions/account-api.actions';

export const accountFeatureKey = 'accounts';

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
    (state, { accountMovements }): AccountState => {
      return {
        ...state,
        accountMovements,
      };
    }
  ),
  on(AccountApiActions.getAccountMovementsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const accountsFeature = createFeature({
  name: accountFeatureKey,
  reducer: accountReducer,
});

export const { selectAccountMovements, selectAccountsState, selectError } =
  accountsFeature;
