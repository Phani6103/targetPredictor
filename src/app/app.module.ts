import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatePegRatioComponent } from './component/calculate-peg-ratio/calculate-peg-ratio.component';
import {StocksApiService} from './service/stocks-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import { BullishStocksComponent } from './component/bullish-stocks/bullish-stocks.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'bullish', component: BullishStocksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CalculatePegRatioComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    BullishStocksComponent,
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
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(
      routes, { enableTracing: true }
    )
  ],
  providers: [
    StocksApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
