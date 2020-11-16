import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/core/services/api/dashboard-service/dashboard.service';
import { HttpRequestModel } from 'src/app/core/services/http-request-service/http-request-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('revenue') revenueChart: ElementRef<HTMLCanvasElement>;
  // line chart
  public lineChartData = [
    {
      data: [2000, 4000, 6000, 8000, 10000, 2000, 4000, 6000, 8000, 10000, 10000, 3000],
      label: 'This month',
    },
    {
      data: [4000, 4000, 6000, 8000, 20000, 8000, 10000, 2000, 4000, 6000, 8000, 10000],
      label: 'Last month',
    },
  ];
  public optionsLine = {
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },

    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: '#FFFFFF',
      },
    },
    title: {
      display: true,
      fontColor: '#FFFFFF',
      text: 'Revenue',
      position: 'top',
    },
  };
  public lineChartType = 'line';
  public lineChartLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  // doughnut chart
  public optionsDoughnut = {
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },

    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: '#FFFFFF',
      },
    },
    title: {
      display: true,
      fontColor: '#FFFFFF',
      text: 'Access By Device',
      position: 'top',
    },
  };
  public doughnutChartData = [60, 30, 10];
  public doughnutChartType = 'doughnut';
  public doughnutChartLabels = ['Mobile', 'Desktop', 'Tablet'];

  // pie chart
  public optionsPie = {
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },

    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontColor: '#FFFFFF',
      },
    },
    title: {
      display: true,
      fontColor: '#FFFFFF',
      text: 'Customers',
      position: 'top',
    },
  };
  public pieChartData = [400, 150, 50];
  public pieChartType = 'pie';
  public pieChartLabels = ['New', 'Continue', 'Log Out'];

  date = new Date();
  weekday = new Array(7);
  today;
  time;
  day;
  //
  weatherData: any;



  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.weekday[0] = "Sunday";
    this.weekday[1] = "Monday";
    this.weekday[2] = "Tuesday";
    this.weekday[3] = "Wednesday";
    this.weekday[4] = "Thursday";
    this.weekday[5] = "Friday";
    this.weekday[6] = "Saturday";
    this.today = this.weekday[this.date.getDay()]
    this.time = this.date.toLocaleTimeString();
    this.day = this.date.toDateString();

    let dataGet = new HttpRequestModel();
    dataGet.params = {}
    this.dashboardService.getWeather(dataGet).subscribe((res) => {
      console.log(res)
    })
  }



}
