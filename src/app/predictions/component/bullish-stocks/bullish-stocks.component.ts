import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {PredictionsService} from '../../service/predictions.service';

@Component({
  selector: 'app-bullish-stocks',
  templateUrl: './bullish-stocks.component.html',
  styleUrls: ['./bullish-stocks.component.css']
})
export class BullishStocksComponent implements OnInit, AfterViewInit {
  bullishStocksForm = this.fb.group({
    stocks: this.fb.array([])
  });

  constructor(private fb: FormBuilder, private predictionsService: PredictionsService) { }

  ngOnInit() {
    this.predictionsService
      .getPredictionsData()
      .subscribe(
        (resp: Array<any>) => {
          resp.forEach( item => {
            this.addRow(item.name, item.support1, item.support2, item.resistance1, item.resistance2, item.currentValue);
          });
        },
        err => { console.log(err); }
      );
  }

  ngAfterViewInit(): void {

  }

  get stock() {
    return this.fb.group( {
      name: [''],
      support1: [''],
      support2: [''],
      resistance1: [''],
      resistance2: [''],
      currentValue: ['']
    });
  }

  setValue(name?, support1?, support2?, resistance1?, resistance2?, currentValue?) {

  }

  get stocks() {
    return this.bullishStocksForm.get('stocks') as FormArray;
  }

  addRow(name?, support1?, support2?, resistance1?, resistance2?, currentValue?) {
    const newStock = this.stock;
    newStock.setValue({
      name: [name],
      support1: [support1],
      support2: [support2],
      resistance1: [resistance1],
      resistance2: [resistance2],
      currentValue: [currentValue]
    });
    this.stocks.push(newStock);
  }

}
