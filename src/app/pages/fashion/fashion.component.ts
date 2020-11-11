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
  sort;
  data: any;
  typeData: any;
  sizeData: any;
  keyword: string;
  currentPage = 1;
  placeholder = 'Bạn muốn tìm kiếm gì?'
  constructor(public dialog: MatDialog, private fashionService: FashionService) { }

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
      console.log(result)
      this.data.data = [...this.data.data]
      if (result) {
        this.data.data.unshift(result.data);
        console.log(this.data.data)
      }
    });
  }
  handleTypeFashion(type) {
    this.getData(type)
  }
  handleItemEdit(e) {
    const dialogRef = this.dialog.open(CardEditComponent, {
      disableClose: true,
      data: { data: e, typeData: this.typeData, sizeData: this.sizeData },
    });
    dialogRef.afterClosed().subscribe(result => {
      let x = this.data.data.findIndex(x => x.product_id === result.product.product_id)
      this.data.data = [...this.data.data];
      this.data.data.splice(x, 1);
      this.data.data.unshift(result.product)
      console.log(result.product)

    });
  }


  handlePageChange(e) {
    // this.getData(e)
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { currentPage: e };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
    }, (error) => {
      console.log('lỗi')
    })
  }
  handleValueSearch(e) {
    // this.getData(e)
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = { search: e };
    this.fashionService.getListFashion(dataGetListFashion).subscribe((item) => {
      this.data = item
    }, (error) => {
      console.log('lỗi')
    })
    // this.getData(e);
  }
  getData(text?, currentPage?, sort?, type?): void {
    const dataGetListFashion = new HttpRequestModel();
    dataGetListFashion.params = {};

    // if (currentPage) {
    //   Object.assign(dataGetListFashion.params, { currentPage: currentPage });
    // }
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
      this.data = item
    }, (error) => {
      console.log('lỗi')
    })
    this.keyword = text ? text : '';
    this.currentPage = currentPage ? currentPage : 1;
  }

}
