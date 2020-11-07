# Table check

# Selector:

app-table-check

# Input:

    headers: { key: string; value: string }[] // Mảng các tên các cột ở header (key: khóa của cột, value: tên cột được hiển thị)

    dataList: any[] // Danh sách các dòng, các dòng có dạng
        {
          keyName1: {
            type: 'text' | 'check-box',
            value: string | boolean (tương ứng với type)
          },
          ...
          keyNameN: {
            type: 'text' | 'check-box',
            value: string | boolean (tương ứng với type)
          }
        } // keyName1...keyNameN tương ứng với các key trong mảng headers ở trên

# Input example:

    headers = [
      { key: 'module', value: 'Modules' },
      { key: 'view', value: 'View' },
      { key: 'edit', value: 'Edit' },
      { key: 'create', value: 'Create' },
      { key: 'delete', value: 'Delete' }]

    dataList = [
      {
        module: { type: 'text', value: 'Users' },
        view: { type: 'check-box', value: false },
        edit: { type: 'check-box', value: true },
        create: { type: 'check-box', value: true },
        delete: { type: 'check-box', value: false }
      },
      {
        module: { type: 'text', value: 'Math' },
        edit: { type: 'check-box', value: true },
        view: { type: 'check-box', value: false },
        create: { type: 'check-box', value: true },
        delete: { type: 'check-box', value: false }
      }]

# Output:

    dataCheckChange: any[] // trả về các dòng có thay đổi

# Module:

{ MatIconModule } from '@angular/material/icon';

# Example:

    <app-table-check
      (dataCheckChange)="handle($event)"
      [dataList]="dataTableCheck"
      [headers]="headers"
    ></app-table-check>
