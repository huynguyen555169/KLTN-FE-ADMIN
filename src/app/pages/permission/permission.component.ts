import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }
  handle(e) {

  }

}
