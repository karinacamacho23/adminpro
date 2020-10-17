import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

	constructor() { 
		

		this.contarTres().then( msj=> console.log ('El proceso fue ', msj) )
		    .catch( msj=> console.warn ( msj) );
	}

	ngOnInit(): void {
	}

	contarTres () : Promise 	<boolean> {
		let contador : number = 0;
		return new Promise ( (resolve, reject) =>{

			let intervalo = setInterval ( () => {

				contador += 1;
				console.log ( contador );
				if ( contador === 3 ) {
					resolve ( true );
					clearInterval(intervalo);
				}

			}, 1000 );
		} );
	}


}
