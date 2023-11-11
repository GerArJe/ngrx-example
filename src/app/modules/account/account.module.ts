import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { accountReducer } from './state/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './state/account.effect';


@NgModule({
  declarations: [AccountMovementsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    StoreModule.forFeature('accounts', accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
