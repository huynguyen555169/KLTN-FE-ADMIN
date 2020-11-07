import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { MatInputModule } from '@angular/material/input';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TableClassicModule } from 'src/app/common-module/table-package/table-classic/table-classic.module';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { SearchModule } from 'src/app/shared/search/search.module';

@NgModule({
  declarations: [
    UserManagementComponent,
    DialogEditUserComponent,
    DialogCreateUserComponent,
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    TableClassicModule,
    SearchModule,
    PaginationModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
  ],
})
export class UserManagementModule { }
