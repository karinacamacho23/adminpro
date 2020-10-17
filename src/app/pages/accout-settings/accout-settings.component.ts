import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: [
  ]
})
export class AccoutSettingsComponent implements OnInit {

/*
	*/
	constructor( public _setting : SettingsService ) { }

	ngOnInit(): void {
		this.colocarChekDef ();
	}


	cambiarColor ( tema : string, link : any ) {
		
		this.aplicarChek ( link );
		this._setting.aplicarTema ( tema );
		
			
	}

	aplicarChek ( link : any ) {
		let selectores : any = document.getElementsByClassName('selector');
/*		console.log ( selectores)*/

		for ( let ref of selectores ){
			ref.classList.remove ('working');
		}
		link.classList.add ('working');
	}

	colocarChekDef () {
		let tema = this._setting.ajustes.tema;
		let selectores : any = document.getElementsByClassName('selector');
		for ( let ref of selectores ){
			if ( ref.getAttribute ('data-theme') === tema ){
				ref.classList.add ('working');
				break;
			}
		}		
	}
}
