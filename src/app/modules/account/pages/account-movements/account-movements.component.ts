import { Component } from '@angular/core';
import { AccountMovement } from '../../../../models/account-movement.model';
import { AccountMovementsService } from '../../../../services/account-movements.service';



@Component({
  selector: 'app-account-movements',
  templateUrl: './account-movements.component.html',
  styleUrls: ['./account-movements.component.scss'],
})
export class AccountMovementsComponent {
  accountMovements: AccountMovement[] = [];
  headerColumns: string[] = ['date', 'description', 'amount'];
  loading: boolean = true;
  totalRegisters = 50;
  perPage = 10;
  pagination: number[] = [];
  actualPage = 1;

  constructor(private _accountMovementsService: AccountMovementsService) {}

  ngOnInit(): void {
    this.getAccountMovements(true);
  }

  private getAccountMovements(isFirstLoad?: boolean) {
    this.loading = true;
    this._accountMovementsService.getAccountMovements().subscribe({
      next: (accountMovements) => {
        this.accountMovements = accountMovements;
        if (isFirstLoad) {
          this.fillPagination();
        }
        this.loading = false;
      },
    });
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
      this.getAccountMovements();
    }
  }
}
