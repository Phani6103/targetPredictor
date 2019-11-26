import {NgModule} from '@angular/core';
import {BullishStocksComponent} from './bullish-stocks.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BullishStocksRoutingModule} from './bullish-stocks-routing.module';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    BullishStocksComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    BullishStocksRoutingModule
  ]
})
export class BullishStocksModule {}
