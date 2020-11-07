import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo ( archivo: File, tipo: string, id:string ) {
  	//code javaScript

  	return new Promise ((resolve, reject) => {
  		let formData = new FormData();

	  	let xhr = new XMLHttpRequest();

	  	formData.append( 'imagen', archivo, archivo.name );

	  	xhr.onreadystatechange = function () {
	  		//recibo informacion cada vez q el estado cambie
	  		//pero en este caso solo me interesa el proceso culminado. 

	  		if ( xhr.readyState === 4 ) {
	  			if ( xhr.status == 200 ) {
	  				
	  				resolve (JSON.parse(xhr.response));//tendra la info q retorna en el back
	  			} else {
	  				console.log (' Fallo la subida del arch ');
	  				reject (JSON.parse(xhr.response));
	  			}
	  		}
	  	};

	  	let url = URL_SERVICIOS + '/upload/' + tipo + '/' +id;
	  	
	  	xhr.open ('PUT', url, true); //el ultimo arg es si es asincrono
	  	xhr.send ( formData );// se envia el peiload
  	});
  	
  }
}
