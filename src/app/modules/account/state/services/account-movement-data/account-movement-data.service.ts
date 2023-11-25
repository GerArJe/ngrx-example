import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { AccountMovement } from '../../../../../models/account-movement.model';
import { HttpClient } from '@angular/common/http';
import { HttpOptions } from '@ngrx/data/src/dataservices/interfaces';
import { Observable } from 'rxjs';
import { AccountMovementsService } from '../../../../../services/account-movements.service';

@Injectable({
  providedIn: 'root'
})
export class AccountMovementDataService extends DefaultDataService<AccountMovement> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, private accountMovementsService: AccountMovementsService) {
    super('AccountMovement', http, httpUrlGenerator);
   }


  override getAll(options?: HttpOptions | undefined): Observable<AccountMovement[]> {
    return this.accountMovementsService.getAccountMovements();
  }
  
}
