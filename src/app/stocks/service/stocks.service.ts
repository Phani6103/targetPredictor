import {Injectable} from '@angular/core';
import {StocksModule} from '../stocks.module';
import {of} from 'rxjs';

// @Injectable({
//   providedIn: StocksModule
// })
export class StocksService {

  getStocksList(region) {
    return of([
    {
      symbol: 'AAPL',
      name: 'Apple',
      location: 'USA',
      market: 'NASDAQ'
    },
      {
      symbol: 'TSLA',
      name: 'Tesla',
      location: 'USA',
      market: 'NASDAQ'
    }]);
  }

  getStockData(name) {
    return {
      weekOf: {
        '10-10-10': {},
        '10-20-10': {},
      }
    };
  }
}
