import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    SnackBarComponent
  ]
})
export class SnackBarModule { }
