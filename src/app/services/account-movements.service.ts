import { Injectable } from '@angular/core';
import { Observable, of, take, delay } from 'rxjs';

import { AccountMovement } from '../models/account-movement.model';
import { generateManyAccountMovements } from '../models/account-movemnt.mock';

@Injectable({
  providedIn: 'root',
})
export class AccountMovementsService {
  getAccountMovements(): Observable<AccountMovement[]> {
    return of(generateManyAccountMovements(10)).pipe(take(1), delay(1000));
  }
}
