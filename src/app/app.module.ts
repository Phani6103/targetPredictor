import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatePegRatioComponent } from './component/calculate-peg-ratio/calculate-peg-ratio.component';
import {StocksApiService} from "./service/stocks-api.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CalculatePegRatioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    StocksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
