import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data, dataNav, position } from './mockData';


@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataNav = dataNav;
  width = 400;
  isShowHeader = false;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
}
