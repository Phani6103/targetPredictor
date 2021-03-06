import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
