import { Component, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { AccountMovement } from '../../../../models/account-movement.model';
import { StateFacadeService } from '../../state/services/state-facade.service';



@Component({
  selector: 'app-account-movements',
  templateUrl: './account-movements.component.html',
  styleUrls: ['./account-movements.component.scss'],
})
export class AccountMovementsComponent {
  private state = inject(StateFacadeService);
  accountMovements$: Observable<AccountMovement[]> = this.state.accountMovements$.pipe(tap(() => {
    this.loading = false;
  }));
  headerColumns: string[] = ['date', 'description', 'amount'];
  loading: boolean = true;
  totalRegisters = 50;
  perPage = 10;
  pagination: number[] = [];
  actualPage = 1;

  ngOnInit(): void {
    this.state.getAccountMovements();
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
      this.state.getAccountMovements();
    }
  }
}
