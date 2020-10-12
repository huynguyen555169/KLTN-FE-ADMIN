import { Component, OnInit } from '@angular/core';
import { data, position } from './mockData';


@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data = data;
  position = position

  constructor() { }

  ngOnInit(): void {
  }
  menuClick(e) {
    console.log(e)
  }
}
