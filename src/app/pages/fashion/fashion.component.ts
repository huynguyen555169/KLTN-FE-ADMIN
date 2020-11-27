import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CSpinnerService } from 'src/app/common-module/c-spinner/c-spinner.service';
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
  sort;
  data: any;
  typeData: any;
  clearSort = false;
  sizeData: any;
  keyword: string;
  currentPage = 1;
  placeholder = 'Bạn muốn tìm kiếm gì?'
  totalPage: any;
  constructor(public dialog: MatDialog, private fashionService: FashionService, private spinner: CSpinnerService) { }

  ngOnInit(): void {
    let dataGetType = new HttpRequestModel();
    this.fashionService.getListType(dataGetType).subscribe((res) => {
      this.typeData = res
    })
    let dataGetSize = new HttpRequestModel();
    this.fashionService.getListSize(dataGetSize).subscribe((size) => {
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
      this.getData()
    });
  }
  handleTypeFashion(type) {
    this.spinner.show()
    // this.getData(type.product_type_id)
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { type: type.product_type_id };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.totalPage = item.countPage;
      console.log(this.totalPage)
      this.data = item
      this.spinner.hide()
    }, (error) => {
    })
  }
  handleSort(e) {
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { sort: e.direction };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
    }, (error) => {
    })
  }

  handleItemEdit(e) {
    const dialogRef = this.dialog.open(CardEditComponent, {
      disableClose: true,
      data: { data: e, typeData: this.typeData, sizeData: this.sizeData },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.message === "Update sản phẩm thành công!") {
        this.getData()
      }
    });
  }


  handlePageChange(e) {
    // this.getData(e)
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { currentPage: e };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
    }, (error) => {
    })
  }
  handleValueSearch(e) {
    // this.getData(e)
    this.spinner.show()
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { search: e };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
      this.spinner.hide()
    }, (error) => {
    })
    // this.getData(e);
  }
  getData(text?, currentPage?, sort?, type?): void {
    this.spinner.show()
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = {};

    if (text) {
      Object.assign(dataGetListFashion.params, { search: text });
    }
    if (sort && sort.active && sort.direction) {
      Object.assign(dataGetListFashion.params, {
        sort: sort.active,
        sortType: sort.direction,
      });
      this.sort = sort;
      if (type) {
        Object.assign(dataGetListFashion.params, { type: type });
      }
    }
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.totalPage = item.countPage;
      this.spinner.hide()
      this.data = item

    }, (error) => {
    })
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
