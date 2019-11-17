import { Component, OnInit } from '@angular/core';
import {StocksApiService} from "../../service/stocks-api.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-calculate-peg-ratio',
  templateUrl: './calculate-peg-ratio.component.html',
  styleUrls: ['./calculate-peg-ratio.component.css']
})
export class CalculatePegRatioComponent implements OnInit {
  pegRatio: number = NaN;

  constructor(private stocksApiService: StocksApiService) { }

  ngOnInit() {
    this.stocksApiService.stockPrice
      .pipe(map(resp => JSON.parse(resp.toString())))
      .subscribe(resp => {
        console.log(resp)
      });
  }

  calculatePEGRatio() {
    let shareValue = document.getElementById('sharePrice').innerHTML;
    let epsValue = document.getElementById('eps').innerHTML;
    let epsGrowthValue = document.getElementById('epsGrowth').innerText;

    const pegRatioFormula = (shareValue * epsValue)/ epsGrowthValue;
    this.pegRatio = pegRatioFormula;
    return pegRatioFormula;

  }

}
