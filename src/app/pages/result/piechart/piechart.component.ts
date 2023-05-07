import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
   // Pie
   public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Condidat1'], [ 'condidat2' ],  ];
  public pieChartDatasets = [ {
    data: [ 200, 500 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
  }
}
