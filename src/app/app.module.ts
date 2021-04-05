import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksApiService} from './service/stocks-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {HomeModule} from './home/home.module';
import {FooterComponent} from './footer/footer.component';
import {CalculatePegRatioComponent} from './calculate-peg-ratio/calculate-peg-ratio.component';
import {AngularModule} from './angular.module';
import {StocksModule} from './stocks/stocks.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    FooterComponent,
    CalculatePegRatioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    AngularModule,
    HomeModule,
    StocksModule,
    AppRoutingModule,
  ],
  providers: [
    StocksApiService
  ],
  bootstrap: [
    AppComponent
  ],
  exports: [
    AngularModule
  ]
})
export class AppModule { }
