import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bullish-stocks',
  templateUrl: './bullish-stocks.component.html',
  styleUrls: ['./bullish-stocks.component.css']
})
export class BullishStocksComponent implements OnInit {
  bullishStocksForm = this.fb.group({
    stocks: this.fb.array([
      this.stock
      ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  get stock() {
    return this.fb.group( {
      name: [''],
      support1: [''],
      support2: [''],
      resistance1: [''],
      resistance2: ['']
    });
  }

  get stocks() {
    return this.bullishStocksForm.get('stocks') as FormArray;
  }

  addRow() {
    this.stocks.push(this.stock);
  }

}
