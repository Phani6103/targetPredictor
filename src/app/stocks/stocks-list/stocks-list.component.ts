import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StocksService} from '../service/stocks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stocks-list',
  templateUrl: './stocks-list.component.html',
  providers: [StocksService]
})
export class StocksListComponent implements OnInit, AfterViewInit {
  stocks;
  sel;
  constructor(private stocksService: StocksService,
              private router: Router) {
    // [options]
    // .addEventListener('selected', (evt) => {
    //   console.log('evt: ', evt);
    // });
  }

  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    this
      .stocksService
      .getStocksList('US')
      .subscribe(resp => {
        this.stocks = resp;
      });
  }

  onStockSelected() {
    const stockSel = (document.getElementById('stocksDataListInput') as HTMLInputElement).value;
    this.router.navigate([`/stocks/${stockSel}`]);
  }
}
