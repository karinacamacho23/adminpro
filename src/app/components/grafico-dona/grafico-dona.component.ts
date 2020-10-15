import { Component, OnInit, Input } from '@angular/core';
/*ng2-Charts*/
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {
// Doughnut
	@Input() public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	@Input() public doughnutChartData: MultiDataSet = [
	[350, 450, 100]
	];
	@Input() public doughnutChartType: ChartType = 'doughnut';
	
	constructor() { }

	ngOnInit(): void {
	}


	// events
	/*public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
	console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
	console.log(event, active);
	}
*/

}
