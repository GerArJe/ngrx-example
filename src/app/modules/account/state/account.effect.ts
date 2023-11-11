import { Injectable } from "@angular/core";
import { mergeMap, map, catchError, of } from "rxjs";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AccountMovementsService } from "../../../services/account-movements.service";
import { AccountApiActions, AccountPageActions } from "./actions";

@Injectable()
export class AccountEffects {
    constructor(
        private actions$: Actions,
        private accountMovementsService: AccountMovementsService
    ) { }

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