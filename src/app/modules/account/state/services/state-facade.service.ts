import { Injectable, inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { AccountState, selectAccountMovements } from '../reducers/account.reducer';
import { AccountPageActions } from '../actions/account-page.actions';

@Injectable({
  providedIn: 'root'
})
export class StateFacadeService {
  private store = inject( Store<AccountState>)
  readonly accountMovements$ = this.store.select(selectAccountMovements);

  getAccountMovements() { 
    this.store.dispatch(AccountPageActions.getAccountMovements());
  }
}
