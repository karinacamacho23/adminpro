import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from '../moda-upload/modal-upload.service';

@Component({
  selector: 'app-moda-upload',
  templateUrl: './moda-upload.component.html',
  styles: [
  ]
})
export class ModaUploadComponent implements OnInit {

  oculto : string = this.ms.oculto;
  subirImagen : File; //defecto sera null o undefine
  imagenTemp : any;


  constructor( public sas :SubirArchivoService,
  				public ms : ModalUploadService ) { }

  ngOnInit(): void {
    console.log('Modal desde componente.ts')
  }

  cerrarModal() {
  	this.subirImagen = null;
  	this.imagenTemp = null;
  	this.ms.ocultarModal();
  }
  //SELECCION DE IMAGEN:
  seleccionImagen( archivo : File ) {
	    
		if ( !archivo ) {
		 	this.subirImagen = null;
		  	return; 
		}

		console.log ( archivo );

		//si aparece image es porque no es una imagen
		if ( archivo.type.indexOf('image') < 0 ) {
		  	swal ('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
		  	this.subirImagen = null;
		  	return;
		}
		this.subirImagen = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result ;
   }

   subirrImagen () {
   	console.log('entro')
   	this.sas.subirArchivo( this.subirImagen, this.ms.tipo, this.ms.id )
   		.then( resp => {
   			//aqui debo emitir la informacion
   			console.log(resp)
   			this.ms.notificacion.emit( resp );
   			this.cerrarModal();
   		
   		})

   		.catch( err => {
   			console.log('Error al cargar...')
   		});
   }
}
