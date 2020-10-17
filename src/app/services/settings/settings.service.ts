import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/*--->>>>>>Me hace referencia a todo el documento inyectandolo con @Inject #*/

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

	ajustes : Ajustes = {
		temaUrl :  'assets/css/colors/default-dark.css',
		tema    :  'default-dark'
	}
	constructor( @Inject ( DOCUMENT) private _documento /*#*/  ) { 
		
		this.cargarAjustes();	
/*		Este es el llamado del metodo que hace el trabajo 
		de hacer el cambio deseado*/
	}
	/*###USANDO localStorage###*/
	guardarAjustes () {
		/*Guardar en el localStorage*/
		/*console.log (' Guardado en el localStorage ')*/
		localStorage.setItem ( 'ajustes', JSON.stringify ( this.ajustes ) );
	}

	cargarAjustes () {
		if ( localStorage.getItem('ajustes') ){
			this.ajustes = JSON.parse( localStorage.getItem ('ajustes') ) ;
			/*el JSON.parse --- es para pasar de string a Objeto 
			(Cod JAVASCRIPT)*/
			this.aplicarTema ( this.ajustes.tema );
			/*console.log (' Cargando del localStorage ');*/
			/*console.log (this.ajustes);*/

		}else {
			console.log ('Usando Valores por Defecto')
		}
	}

	aplicarTema ( tema : string ) {

		let url : string = `assets/css/colors/${ tema }.css`;
		this._documento.getElementById('tema').setAttribute( 'href', url ); 

		/*asignandoValores para el objeto ajustes : Ajustes*/
		this.ajustes.temaUrl = url;
		this.ajustes.tema    = tema;
		this.guardarAjustes ();// Guardamos los ajustes 
	}


}



/*
crear interfaz que me restringira 
la forma de trabajar los ajustes que se quiere*/
interface Ajustes {
	temaUrl : string;
	tema    : string;
}