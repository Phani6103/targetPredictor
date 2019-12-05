import {RouterModule, Routes} from '@angular/router';
import {BullishStocksComponent} from './component/bullish-stocks/bullish-stocks.component';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

const predictionsRoutes: Routes = [
  { path: 'bullish', component: BullishStocksComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild(predictionsRoutes)
  ]
})
export class PredictionsRoutingModule {}
