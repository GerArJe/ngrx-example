import { createAction, createActionGroup, emptyProps } from "@ngrx/store";

export const AccountPageActions = createActionGroup({
    source: 'Account Page Actions',
    events: {
        getAccountMovements: emptyProps()
    }
});