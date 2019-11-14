import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePegRatioComponent } from './calculate-peg-ratio.component';

describe('CalculatePegRatioComponent', () => {
  let component: CalculatePegRatioComponent;
  let fixture: ComponentFixture<CalculatePegRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatePegRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePegRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
