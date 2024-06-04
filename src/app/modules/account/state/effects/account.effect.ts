import { Injectable, inject } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AccountMovementsService } from '../../../../services/account-movements.service';
import { AccountApiActions } from '../actions/account-api.actions';
import { AccountPageActions } from '../actions/account-page.actions';

@Injectable()
export class AccountEffects {
  private actions$ = inject(Actions);
  private accountMovementsService = inject(AccountMovementsService);

  getAccountMovements$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AccountPageActions.getAccountMovements),
      mergeMap(() =>
        this.accountMovementsService.getAccountMovements().pipe(
          map((accountMovements) =>
            AccountApiActions.getAccountMovementsSuccess({ accountMovements })
          ),
          catchError((error) =>
            of(AccountApiActions.getAccountMovementsFailure({ error }))
          )
        )
      )
    );
  });
}
