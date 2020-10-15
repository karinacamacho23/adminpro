import { Component, OnInit, ElementRef } from '@angular/core';
import { Input, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

	@Input(/*'progre'*/) progreso : number = 50;
	@Input() leyenda  : string = 'Leyenda';	
	@Output() cambioValor = new EventEmitter <number>();

	@ViewChild('txtProgress') txtProgress : ElementRef;

	constructor() { 
		
	}

	ngOnInit(): void {
	}

	cambiar ( valor : number) {
		if ( this.progreso > 99 ){
			this.progreso = 100;
			return;
		}
		if ( this.progreso <= 0 ){
			this.progreso = 0;
			return;
		}
		

		this.progreso = this.progreso + valor;
		this.cambioValor.emit (this.progreso);
	}

	OnChanges( newValue : number) {
		
		/*javaScript*/
		//let elemHTML : any = document.getElementsByName ('progreso')[0];
		/*End-javaScript*/

		//console.log ( this.txtProgress );
		if ( newValue >= 100 ){
			this.progreso = 100;
		}else if ( newValue <= 0 ){
			this.progreso = 0;
		}else {
			this.progreso = newValue;
		}
 
		//elemHTML.value = this.progreso;
		this.txtProgress.nativeElement.value = this.progreso;
		this.cambioValor.emit (this.progreso);
	}

}
