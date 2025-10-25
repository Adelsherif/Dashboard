import { DataServices } from './../../core/services/dataServices/data-services';
import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule ,BaseChartDirective ],
  templateUrl: './statistics.html',
   styleUrls: ['./statistics.scss']
})
export class Statistics {
  date = new Date();
  numOfProducts = 0;
  numOfOrders = 0;
  numOfUsers = 0;

constructor(private dataservices:DataServices) {}

ngOnInit(): void {
  this.dataservices.getAllProducts().subscribe((products :any)=>{
    this.numOfProducts = products.data.length;
  })

  this.dataservices.getAllOrders().subscribe((orders :any)=>{
    console.log(orders);

    this.numOfOrders = orders.data.length;
  })

  this.dataservices.getAllUsers().subscribe((users :any)=>{
    this.numOfUsers = users.users.length;
    console.log(users);

  })
}

  chartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { label: 'Sales', data: [10, 20, 30,40, 10, 50] ,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#8763ffff', '#ebe236ff', '#ff5664ff'],

      },


    ]
  };

  chartType_one: ChartType = 'bar';
  chartType_tow: ChartType = 'doughnut';


}
