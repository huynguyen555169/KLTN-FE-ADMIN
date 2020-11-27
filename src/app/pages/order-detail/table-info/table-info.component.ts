import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss']
})
export class TableInfoComponent implements OnInit {
  @Input() headers: { key: string; value: string }[];

  /**
   * data to show in table
   */
  @Input() dataList: any;
  objectKeys = Object.keys;
  constructor() { }


  ngOnInit(): void {
  }
  isArray(value: any): any {
    return Array.isArray(value);
  }

}
