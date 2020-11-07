import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-table-check',
  templateUrl: './table-check.component.html',
  styleUrls: ['./table-check.component.scss']
})
export class TableCheckComponent implements OnInit, OnChanges {
  /**
   * Array header object to generate table header
   */
  @Input() headers: { key: string; value: string }[];

  /**
   * data to show in table
   */
  @Input() dataList: any[];

  /**
   * check change event emit
   *
   */
  @Output() dataCheckChange = new EventEmitter<any>();

  @Output() saveChange = new EventEmitter<any>();

  @Output() cancelChange = new EventEmitter<any>();

  dataReset;
  isEdit = false;
  constructor() {}

  objectKeys = Object.keys;
  checkChangedList = [];

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.dataList &&
      changes.dataList.currentValue !== changes.dataList.previousValue
    ) {
      this.checkChangedList.length = 0;
      this.dataReset = JSON.parse(JSON.stringify(this.dataList));
    }
  }

  changeCheck(dataRow: any, columnName: string) {
    const indexInList = this.checkChangedList.findIndex(d => d === dataRow);
    dataRow[columnName].value = !dataRow[columnName].value;
    if (indexInList === -1) {
      this.checkChangedList.push(dataRow);
    } else {
      this.checkChangedList[indexInList] = dataRow;
    }
    this.dataCheckChange.emit(this.checkChangedList);
  }

  handleSave() {
    // this.userInfoEdit.emit(this.user);
    // this.isEdit = !this.isEdit;
    this.saveChange.emit(this.checkChangedList);
  }
  handleCancel() {
    this.dataList = JSON.parse(JSON.stringify(this.dataReset));
  }
}
