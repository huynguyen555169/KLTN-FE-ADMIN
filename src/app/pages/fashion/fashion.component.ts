import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardEditComponent } from 'src/app/common-module/card-package/card-edit/card-edit.component';
import { FashionService } from 'src/app/core/services/api/fashion-service/fashion.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';
import { DialogCreateComponent } from 'src/app/shared/dialog-create/dialog-create.component';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  data: any;
  typeData: any;
  sizeData: any;
  keyword: string;
  currentPage = 1;
  placeholder = 'Bạn muốn tìm kiếm gì?'
  constructor(public dialog: MatDialog, private fashionService: FashionService) { }

  ngOnInit(): void {
    this.fashionService.getListType().subscribe((type) => {
      this.typeData = type
    })
    this.fashionService.getListSize().subscribe((size) => {
      this.sizeData = size
    })
    this.getData()
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      disableClose: true,
      data: { typeData: this.typeData, sizeData: this.sizeData },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data = [...this.data]
      if (result) {
        this.data.unshift(result);

      }
      console.log(result)
    });
  }
  handleItemEdit(e) {
    const index = this.data.indexOf(e);
    const dialogRef = this.dialog.open(CardEditComponent, {
      disableClose: true,
      data: { data: e, typeData: this.typeData, sizeData: this.sizeData },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data = [...this.data]
      if (result) {
        this.data.splice(index, 1);
        this.data.unshift(result);
      }
    });
  }
  handlePageChange(e) {

  }
  handleValueSearch(e) {

  }
  getData(text?, currentPage?, sort?): void {
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = {};
    if (currentPage) {
      Object.assign(dataGetListFashion.params, { page: currentPage });
    }
    if (text) {
      Object.assign(dataGetListFashion.params, { keyword: text });
    }
    if (sort && sort.active && sort.direction) {
      Object.assign(dataGetListFashion.params, {
        sort: sort.active,
        sortType: sort.direction,
      });
      // this.sort = sort;
    }
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
    })
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
