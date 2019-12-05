import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatTabsModule} from '@angular/material';
import {PredictionsRoutingModule} from './predictions-routing.module';
import {BullishStocksComponent} from './component/bullish-stocks/bullish-stocks.component';

@NgModule({
  declarations: [
    BullishStocksComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    PredictionsRoutingModule
  ],
  exports: []
})

export class PredictionsModule {}
