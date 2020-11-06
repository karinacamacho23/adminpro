import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/usuario/usuarios.service';
import { URL_SERVICIOS } from '../../config';
import { ImagenPipe } from '../../pipes/imagen.pipe';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: [
  ]
})
export class PerfilComponent implements OnInit {

  usuario : Usuarios;
  subirImagen : File; //defecto sera null o undefine
  tipo : string ;
  imagenTemp : string;

  constructor( private us: UsuariosService ) {
   this.usuario = us.usuario 
   this.tipo;
 }

  ngOnInit(): void {
  	
  }

  
  guardar ( usuario : Usuarios ) {
  	
  	this.usuario.nombre = usuario.nombre; 
  	this.usuario.email  = usuario.email;

    if ( this.usuario.google ) {
      this.usuario.email = usuario.email;
    }
  	//llamada del Servicio PUT
  	//console.log(this.usuario._id)
  	this.us.actualizarUsuario( this.usuario )
  		.subscribe();
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
    //codigo JS para la funcion de que me aparezca imagen sin haberla almacenado
    //Solo una imagen temporal HASTA pulsar ACEPTAR
    /*let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result ;*/ //
    //-------->no funciona

  //solo selecciona el usuario la imagen
  }

  cambiarImagen () {
    //llamado del Uusario service porque en el tiene toda la data de mi usuario
    

    this.us.cambiarImagen( this.subirImagen, this.usuario._id );
    this.tipo='usuarios';
  }
}
