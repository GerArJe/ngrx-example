import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyDirective } from './directives/currency/currency.directive';



@NgModule({
  declarations: [CurrencyDirective],
  imports: [
    CommonModule
  ],
  exports: [CurrencyDirective]
})
export class SharedModule { }
