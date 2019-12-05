import {RouterModule, Routes} from '@angular/router';
import {BullishStocksComponent} from './bullish-stocks/bullish-stocks.component';
import {NgModule} from '@angular/core';

const predictionsRoutes: Routes = [
  { path: 'bullish', component: BullishStocksComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(predictionsRoutes)
  ]
})
export class PredictionsRoutingModule {}
