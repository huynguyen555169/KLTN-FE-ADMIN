import { dataConfig, dataGender } from './mockData';
import { DialogCreateUserComponent } from './dialog-create-user/dialog-create-user.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { UserService } from 'src/app/core/services/api/user-service/user.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  clearSort = false;
  dataGender = dataGender;
  dataConfig = dataConfig;
  keyword: string;
  users: any;
  roles: any;
  currentPage = 1;
  sort;
  totalPage: any;
  placeholder = 'Tìm kiếm';
  constructor(
    public dialog: MatDialog,
    private userManagementService: UserService,
    private spinner: CSpinnerService
  ) { }

  ngOnInit(): void {
    this.getData();
    let dataGetRole = new HttpRequestModel();
    this.userManagementService.getRole(dataGetRole).subscribe((res) => {
      this.roles = res;
      console.log(this.roles)
    });
  }

  openDialogCreateUser(): void {
    const dialogRef = this.dialog.open(DialogCreateUserComponent, {
      data: {
        roles: this.roles,

      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData()
    });
  }

  handleValueSearch(e): void {
    this.clearSort = !this.clearSort;
    this.spinner.show()
    const dataGetListStaff = new HttpRequestModel();
    dataGetListStaff.params = { search: e };
    this.userManagementService.getListUser(dataGetListStaff).subscribe((item) => {
      this.users = item
      this.spinner.hide()
    }, (error) => {
    })
  }

  handleEditData(item): void {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {
      disableClose: true,
      data: {
        data: item,
        roles: this.roles,
        gender: this.dataGender
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getData()
      }
    });
  }

  handlePageChange(currentPage: number): void {
    this.getData(this.keyword, currentPage, this.sort);
  }

  handleSort(sort): any {
    this.getData(this.keyword, this.currentPage, sort);
  }

  getData(text?, currentPage?, sort?): void {
    const dataGetListUser = new HttpRequestModel();
    dataGetListUser.params = {};
    if (currentPage) {
      Object.assign(dataGetListUser.params, { page: currentPage });
    }
    if (text) {
      Object.assign(dataGetListUser.params, { keyword: text });
    }
    if (sort && sort.active && sort.direction) {
      Object.assign(dataGetListUser.params, {
        sort: sort.active,
        sortType: sort.direction,
      });
      this.sort = sort;
    }
    this.userManagementService.getListUser(dataGetListUser).subscribe((res) => {
      this.totalPage = res.countPage
      this.users = res;
      console.log(this.users)
      console.log(this.dataConfig)
    });
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }
}
