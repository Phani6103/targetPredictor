import {Component, OnInit, ViewChild} from '@angular/core';
import {PredictionFormComponent} from './prediction-form/prediction-form.component';
import {of} from 'rxjs';

@Component({
  selector: 'app-stock-form',
  templateUrl: 'stock-form.component.html'
})
export class StockFormComponent implements OnInit {

  ngOnInit(): void {
  }

  @ViewChild(PredictionFormComponent, {static: true})
  predictionFormComponent: PredictionFormComponent;

  canDeactivate() {
    return of(confirm('are you sure?'));
  }

}
