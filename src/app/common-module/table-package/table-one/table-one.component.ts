import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


/** Constants used to fill up our data base. */


@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})

export class TableOneComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any;
  @Input() clearSort;
  @Output() itemEdit = new EventEmitter<string>();
  @Output() isSort = new EventEmitter<any>();
  displayedColumns: string[] = ['product_images', 'product_name', 'product_size', 'product_unit_price', 'product_qty', 'product_type_fk', 'product_status', 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.data);
    if (changes.clearSort && !changes.clearSort.isFirstChange()) {
      this.clearSortHeader();
    }

  }
  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  handleSortChange(e): void {
    this.isSort.emit(e);
  }
  handleEdit(e) {
    this.itemEdit.emit(e)

  }
  clearSortHeader(): any {
    this.sort.sort({ id: '', start: 'asc', disableClear: false });
  }
}

