import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatTableModule, MatTabsModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ]
})

export class AngularModule {}
