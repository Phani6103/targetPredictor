import {NgModule} from '@angular/core';
import {CanActivate, CanActivateChild, RouterModule, Routes} from '@angular/router';
import {StocksComponent} from './stocks.component';
import {StockFormComponent} from './stock-form/stock-form.component';
import {StocksListComponent} from './stocks-list/stocks-list.component';
import {CanDeactivateRouteGuard} from './gurads/can-deativate-route.guard';
import {CanActivateRouteGuard} from './gurads/can-activate-route.guard';

const stockRoutes: Routes = [
  { path: 'stocks',
    component: StocksComponent,
    canActivate: [CanActivateRouteGuard],
    children: [
      {
        path: '',
        component: StocksListComponent
      },
      {
      path: ':id',
      component: StockFormComponent,
      canActivate: [CanActivateRouteGuard],
      canDeactivate: [CanDeactivateRouteGuard]
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
