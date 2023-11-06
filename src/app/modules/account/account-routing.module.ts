import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';

const routes: Routes = [
  {
    path: '',
    component: AccountMovementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
