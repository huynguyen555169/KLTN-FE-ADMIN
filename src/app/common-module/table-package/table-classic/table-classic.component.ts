import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  Input,
  OnChanges,
  AfterViewInit,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table-classic',
  templateUrl: './table-classic.component.html',
  styleUrls: ['./table-classic.component.scss'],
})
export class TableClassicComponent implements AfterViewInit, OnChanges {
  @Input() tableConfig;
  /**
   * Out put data when click edit in detail
   */
  @Output() viewDetailData = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  @Output() editData = new EventEmitter<any>();
  /**
   * Using sort
   */
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Data source for table
   */
  dataSource = new MatTableDataSource();

  /**
   * Variable use binding data
   */
  columnsToDisplay = [];

  expandedElement;

  /**
   * Variable use binding data
   */
  columnsToDisplayDetail = [];

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource();
    this.columnsToDisplay = [];
    this.columnsToDisplayDetail = [];
    this.initData();
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  /**
   * Innit data for table
   */
  initData(): void {
    this.tableConfig.columns.forEach((el) => {
      this.columnsToDisplay.push(el.value);
    });
    if (this.tableConfig.action && this.tableConfig.action.name) {
      this.columnsToDisplay.push('more');
    }
    this.dataSource = new MatTableDataSource(this.tableConfig.data);
  }

  /**
   * Function check arry
   * @param value : any
   * @returns boolean
   */
  isArray(value: any): any {
    return Array.isArray(value);
  }

  /**
   * Handler when use click edit in table detail
   * @param value
   * Emit data for parent
   */
  viewDetail(value): void {
    this.viewDetailData.emit(value);
  }
  deleteItem(value): void {
    this.deleteData.emit(value);
  }
  editItem(value): void {
    this.editData.emit(value);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
