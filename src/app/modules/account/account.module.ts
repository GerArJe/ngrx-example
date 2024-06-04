import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AccountRoutingModule } from './account-routing.module';
import { AccountMovementsComponent } from './pages/account-movements/account-movements.component';
import { SharedModule } from '../shared/shared.module';
import { accountFeatureKey, accountReducer } from './state/reducers/account.reducer';
import { AccountEffects } from './state/effects/account.effect';


@NgModule({
  declarations: [AccountMovementsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    StoreModule.forFeature(accountFeatureKey, accountReducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountModule { }
