import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AccountMovementsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ]
})
export class AccountModule { }
