import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountState } from "./account.reducer";

const getAccountFeatureState =  createFeatureSelector<AccountState>('accounts');

export const getAccountsMovementsSelector = createSelector(
    getAccountFeatureState,
    state => state.accountMovements
)