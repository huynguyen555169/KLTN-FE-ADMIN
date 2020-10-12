import { Component, OnInit } from '@angular/core';
import { data } from './mockData';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {

  data = data;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
