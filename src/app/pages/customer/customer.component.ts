import { Component, OnInit } from '@angular/core';
import { data } from './mockData';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  data = data;
  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(e) {
    console.log(e)
  }

}
