import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  }
  public barChartLabels = ['2006', '2007', '2008', '2009'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {
      data: [65, 59, 80, 81], label: 'Series A'
    },
    {
      data: [65, 59, 80, 81], label: 'Series B'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
