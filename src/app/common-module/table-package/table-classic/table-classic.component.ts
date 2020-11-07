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
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table-classic',
  templateUrl: './table-classic.component.html',
  styleUrls: ['./table-classic.component.scss'],
})
export class TableClassicComponent implements AfterViewInit, OnChanges {
  @Input() tableConfig;
  @Input() data;
  @Input() clearSort;
  /**
   * Out put data when click edit in detail
   */
  @Output() viewDetailData = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();
  @Output() editData = new EventEmitter<any>();
  @Output() isSort = new EventEmitter<any>();
  /**
   * Using sort
   */
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
  //
  // chip = TABLE_COLUMN_TYPE.CHIP;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource();
    this.columnsToDisplay = [];
    this.columnsToDisplayDetail = [];
    this.initData();
    if (changes.clearSort && !changes.clearSort.isFirstChange()) {
      this.clearSortHeader();
    }
  }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
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
    this.dataSource = new MatTableDataSource(this.data);
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
  handleSortChange(e): void {
    this.isSort.emit(e);
  }

  clearSortHeader(): any {
    this.sort.sort({ id: '', start: 'asc', disableClear: false });
  }
}
