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
      label: 'This Year',
    },
    {
      data: [4000, 4000, 6000, 8000, 20000, 8000, 10000, 2000, 4000, 6000, 8000, 10000],
      label: 'Last Year',
    },
  ];
  data;
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
      text: 'Buyed Product',
      position: 'top',
    },
  };
  public doughnutChartData = [0, 0, 0, 0, 0];
  public doughnutChartData1 = [0, 0, 0, 0, 0];
  public doughnutChartType = 'doughnut';
  public doughnutChartLabels = ['Shoes', 'Fashion', 'Watch', 'Belt', 'Wallet'];

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
  public pieChartData = [0, 0];
  public pieChartType = 'pie';
  public pieChartLabels = ['Khách hàng đã mua', 'Khách hàng chưa mua'];

  date = new Date();
  weekday = new Array(7);
  today;
  time;
  day;
  //
  countALL;


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


    const getItem = new HttpRequestModel();
    getItem.params = {}
    this.dashboardService.getCountAll(getItem).subscribe((res) => {
      this.countALL = res
    })

    const getYear = new HttpRequestModel();
    getYear.params = {}
    this.dashboardService.getYearAll(getYear).subscribe((res) => {
      // this.countALL = res
      this.lineChartData[0].data = res.data[0].data.map((e) => e.value)
      this.lineChartData[1].data = res.data[1].data.map((e) => e.value)
    })

    const getCustomer = new HttpRequestModel();
    getCustomer.params = {}
    this.dashboardService.getCustomer(getCustomer).subscribe((res) => {
      // this.countALL = res
      this.pieChartData[0] = res.customerOrderd
      this.pieChartData[1] = 100 - res.customerOrderd

    })

    const getTypeProduct = new HttpRequestModel();
    getTypeProduct.params = {}
    this.dashboardService.getTypeProduct(getTypeProduct).subscribe((res) => {
      // this.countALL = res
      this.doughnutChartData[0] = res.result[1].percent
      this.doughnutChartData[1] = res.result[2].percent
      this.doughnutChartData[2] = res.result[3].percent
      this.doughnutChartData[3] = res.result[4].percent
      this.doughnutChartData[4] = res.result[5].percent
      this.doughnutChartData1[0] = res.result[1].value
      this.doughnutChartData1[1] = res.result[2].value
      this.doughnutChartData1[2] = res.result[3].value
      this.doughnutChartData1[3] = res.result[4].value
      this.doughnutChartData1[4] = res.result[5].value


    })
  }



}
