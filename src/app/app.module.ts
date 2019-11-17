import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatePegRatioComponent } from './component/calculate-peg-ratio/calculate-peg-ratio.component';
import {StocksApiService} from "./service/stocks-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatFormFieldModule, MatGridListModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule
} from "@angular/material";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CalculatePegRatioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule
  ],
  providers: [
    StocksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
