import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StocksComponent} from './stocks.component';
import {StockFormComponent} from './stock-form/stock-form.component';
import {StocksListComponent} from './stocks-list/stocks-list.component';

const stockRoutes: Routes = [
  { path: 'stocks',
    component: StocksComponent,
    children: [
      {
        path: '',
        component: StocksListComponent
      },
      {
      path: ':id',
      component: StockFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(stockRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StocksRoutingModule {}
