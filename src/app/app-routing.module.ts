import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {BullishStocksComponent} from './component/bullish-stocks/bullish-stocks.component';
import {HomeComponent} from './component/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bullish', component: BullishStocksComponent}];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
