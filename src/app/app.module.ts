import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StocksApiService} from './service/stocks-api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule, MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {HomeModule} from './home/home.module';
import {FooterComponent} from './footer/footer.component';
import {CalculatePegRatioComponent} from './calculate-peg-ratio/calculate-peg-ratio.component';
import {AngularModule} from './angular.module';
import { ContactComponent } from './contact/contact.component';
import {StocksRoutingModule} from './stocks/stocks-routing.module';
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
    MatTabsModule,
    AngularModule,
    HomeModule,
    MatListModule,
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
