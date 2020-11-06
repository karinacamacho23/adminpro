import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  
//Me permitira hacer el llamado de la pagina
  transform( img: string, tipo: string ): any {
  	let url = URL_SERVICIOS + '/img';
  	//no hay imagen
  	if ( !img ) {
  		return url + '/usuarios/xxx';
  	}

  	// si la imagen es de google
  	if ( img.indexOf('https') >= 0 ) {
  		return img; //se deja quieta
  	}


  	//Si la imagen pertenece a cualquier de los 3 tipos
  	switch ( tipo ) {
  		case "usuarios":
  			// code...
  			 url = url + '/usuarios/' + img;
  			break;

  		case "medicos":
  			// code...
  			 url += '/medicos/' + img;
  			break;
  		
  		case "hospitales":
  			// code...
  			 url += '/hospitales/' + img;
  			break;

  		default:
  			// code...('Tipo de imagen')
  			console.log ('Tipo de imagen son usuarios, medicos, hospitales');
  			 url + 'usuario/xxx';
  			break;
  	}

    return url;
  }

}
