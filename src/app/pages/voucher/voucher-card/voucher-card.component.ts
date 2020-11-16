import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-card',
  templateUrl: './voucher-card.component.html',
  styleUrls: ['./voucher-card.component.scss']
})
export class VoucherCardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
