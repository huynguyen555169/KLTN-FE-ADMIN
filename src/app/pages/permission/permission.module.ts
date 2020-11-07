import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionComponent } from './permission.component';
import { MatIconModule } from '@angular/material/icon';
import { TableCheckModule } from 'src/app/common-module/table-package/table-check/table-check.module';
import { PermissionRoutingModule } from './permission-routing.module';



@NgModule({
  declarations: [PermissionComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TableCheckModule,
    PermissionRoutingModule

  ],
  exports: [
    PermissionComponent
  ]
})
export class PermissionModule { }
