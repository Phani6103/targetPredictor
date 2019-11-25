import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullishStocksComponent } from './bullish-stocks.component';

describe('BullishStocksComponent', () => {
  let component: BullishStocksComponent;
  let fixture: ComponentFixture<BullishStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullishStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullishStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
