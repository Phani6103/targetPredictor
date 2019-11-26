import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BullishStocksComponent} from './bullish-stocks.component';

const BullishStockRoutes: Routes = [
  { path: 'bullish', component: BullishStocksComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(BullishStockRoutes)
  ]
})
export class BullishStocksRoutingModule {}
