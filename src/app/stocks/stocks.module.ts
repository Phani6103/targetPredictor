import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StocksRoutingModule} from './stocks-routing.module';
import {StocksComponent} from './stocks.component';
import {StockFormComponent} from './stock-form/stock-form.component';
import {StocksListComponent} from './stocks-list/stocks-list.component';
import {PredictionFormComponent} from './stock-form/prediction-form/prediction-form.component';



@NgModule({
  declarations: [
    StocksComponent,
    StockFormComponent,
    StocksListComponent,
    PredictionFormComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
