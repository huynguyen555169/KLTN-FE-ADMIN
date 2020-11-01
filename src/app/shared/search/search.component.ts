import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() valueSearch = new EventEmitter<string>();
  @Input() placeholder = 'Search';
  value = '';
  constructor() {}

  ngOnInit(): void {}
  handleInput(): void {
    this.valueSearch.emit(this.value);
  }
}
