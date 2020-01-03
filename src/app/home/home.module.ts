import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {ContactComponent} from '../contact/contact.component';
import {MatListModule} from '@angular/material';

const HomeRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(HomeRoutes),
    MatListModule
  ]
})
export class HomeModule {}
