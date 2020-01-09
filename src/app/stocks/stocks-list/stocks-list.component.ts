import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StocksService} from '../service/stocks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  providers: [StocksService]
})
export class StocksListComponent implements OnInit {
  stocks;
  sel;
  constructor(private stocksService: StocksService,
              private router: Router) {


  }

  ngOnInit(): void {
    document.getElementById('stocksDataListInput')
      .addEventListener('input', (evt: Event) => {
        this.router.navigate([`/stocks/${(evt.target as HTMLInputElement).value}`]);
      });

    this
      .stocksService
      .getStocksList('US')
      .subscribe(resp => {
        this.stocks = resp;
      });
  }
}
