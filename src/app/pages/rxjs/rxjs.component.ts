import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/Operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

	constructor() { 


		
		this.regresaObservable()
		.subscribe ( 
			num => console.log ( 'Susc: ', num ),
			error => console.error ( 'Error en el obs ', error ),
			() => console.log ( 'El obs Termino!')
		);
/*
		nota: 
		   hay 3 posibles respues. la primera cuando sucede todo correcto,
		 la 2da cuando hay un error y la ultima cuando se ejecuta obs.complete(). 
		 que ya termino*/
	}

	ngOnInit(): void {
	}

	regresaObservable () : Observable <any> {

		return new Observable ( (observer : Subscriber<any>) => {
			let cont = 0;
			 let intervalo = setInterval ( () => {
			 	cont += 1;

			 	const salida = {
			 		valor : cont
			 	};

			 	observer.next ( salida );

			 	if ( cont === 3 ){
			 		clearInterval ( intervalo );
			 		observer.complete();
			 	}

			 	/*mensaje de error*/
			 	/*if ( cont === 2 ) {
			 		clearInterval ( intervalo );
			 		observer.error( 'Error!!!!!' );

			 	}*/
			 }, 1000 );
		} )
		.pipe ( map ( resul => resul.valor ) )
	}



}