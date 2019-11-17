import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StocksApiService {

  constructor(private http: HttpClient) { }

  get stockPrice() {
    const url = 'https://api-v2.intrinio.com/fundamentals/AAPL-income_statement-2018-Q1/reported_financials';
    let options = {
      headers: {
        "api_key": 'OmEzNjA1NTg3OTFlZjJiMmJjOWI0YWU4YjBlMzM2MGNi'
      }
    };
    return this.http.get(url, options)
      .pipe(map(resp => {
        // document.write(resp.fundamental);
        return resp
          }
        )
      )
  }
}
