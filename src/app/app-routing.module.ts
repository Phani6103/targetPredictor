import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
