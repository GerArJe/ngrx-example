import { Component } from '@angular/core';
import { AccountMovement } from '../../../../models/account-movement.model';
import { AccountMovementsService } from '../../../../services/account-movements.service';
import { AccountState } from '../../state/account.reducer';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getAccountsMovementsSelector } from '../../state/account.selector';
import { AccountPageActions } from '../../state/actions';



@Component({
  selector: 'app-account-movements',
  templateUrl: './account-movements.component.html',
  styleUrls: ['./account-movements.component.scss'],
})
export class AccountMovementsComponent {
  accountMovements$: Observable<AccountMovement[]> = this.store.select(
    getAccountsMovementsSelector
  ).pipe(tap(() => {
    this.loading = false;
  }));
  headerColumns: string[] = ['date', 'description', 'amount'];
  loading: boolean = true;
  totalRegisters = 50;
  perPage = 10;
  pagination: number[] = [];
  actualPage = 1;

  constructor(private store: Store<AccountState>) {}

  ngOnInit(): void {
    this.store.dispatch(AccountPageActions.getAccountMovements());
    this.fillPagination();
  }

  private fillPagination() {
    for (
      let index = 0;
      index < Math.ceil(this.totalRegisters / this.perPage);
      index++
    ) {
      this.pagination.push(index + 1);
    }
  }

  paginationNavigate(
    action: 'prev' | 'next' | 'specific' | 'nothing',
    page?: number
  ) {
    switch (action) {
      case 'prev':
        this.actualPage--;
        break;
      case 'next':
        this.actualPage++;
        break;
      case 'specific':
        this.actualPage = page!;
        break;
    }
    if (action !== 'nothing') {
      this.loading = true;
      this.store.dispatch(AccountPageActions.getAccountMovements());
    }
  }
}
