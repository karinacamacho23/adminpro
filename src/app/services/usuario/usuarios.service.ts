import { Injectable } from '@angular/core';
//modelUsuario
//http
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
//sweetalert
import swal from 'sweetalert'; 

import { Usuarios } from '../../models/usuarios.model';
//Const url
import { URL_SERVICIOS } from '../../config';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuario: Usuarios;
  token : string;
  tipo : string = '';
  constructor( private http : HttpClient,
               private router : Router,
               private sas : SubirArchivoService ) { 
  	console.log('Servicio Usuario listo de usar!') 
  }

  estaLogueado () { //evaluar el tooken
    
    return ( this.token.length > 5 ) ? true : false;

  } 

  cargarBackend ( usuario : Usuarios, token : string ) {
    if ( token ) {
      this.token = token;
      this.usuario = usuario;
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  enviar_token () {
    return this.token;
  }

  cargarStorage() { //cargar los valores del localstorage a las vari internas
    if ( localStorage.getItem ('token') ) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }//Esta funcion se debe llamar en el constructor ,, para que
  //se ejecute siempre cuando se inicialice
 
  guardarStorage ( _id: string, token:string, usuario:Usuarios ) {
    localStorage.setItem( 'id', _id );//modificado _id
    localStorage.setItem( 'token', token );
    localStorage.setItem( 'usuario',  JSON.stringify(usuario) );
    this.usuario = usuario;
    this.token = token;
    
  }

  logout () {
    this.usuario = null;
    this.token = '';
  
    //localStorage.clear(); me borra absolutamente todo
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  loginGoogle ( token: string ) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post( url, {token} )//lo mismo que colocar {token:token}
      .pipe(
          (map (( resp:any) => {
            this.guardarStorage(resp._id, resp.token, resp.usuario);
            this.cargarStorage(); //para el chequeo del login Gards
            return true; 
          }))
       )
  }

  login ( usuario: Usuarios, recordar: boolean ) {
  	
    if ( recordar ) {
      localStorage.setItem ('email', usuario.email)
    }else {
      localStorage.removeItem('email');
    }

  	let url = URL_SERVICIOS+'/login';
  	return this.http.post( url, usuario )
  		.pipe( map( (resp : any) => {
  				localStorage.setItem( 'id', resp._id );//modificado _id
  				localStorage.setItem( 'token', resp.token );
  				localStorage.setItem( 'usuario',  JSON.stringify(resp.usuario) );
          this.cargarStorage(); //funcion para cargar datos del storage (usarlo como ultimo recurso)
 
          //cargar datos del backend:
          //this.cargarBackend ( resp.usuario, resp.token );
          
  				return true;
  			})
  		);
  }

  crearUsuario ( usuario : Usuarios ) { 

  	let url = URL_SERVICIOS+'/usuario';
  	return this.http.post( url, usuario )
  		.pipe(map( (resp : any) => {
  				swal("Proceso Exitoso", "Usario Creado", "info");
  				return resp
	  		})
	  	);
  }

  actualizarUsuario ( usuario : Usuarios ) {


    let url= URL_SERVICIOS + '/usuario/' + usuario._id;
    
    //se requiere el token
    url += '?token=' + this.token;
    return this.http.put ( url, usuario )
      .pipe( map( (resp : any) => {
        //Actualizar datos en el localstorage
          if ( usuario._id === this.usuario._id ){
            let usuarioDB : Usuarios = resp.usuario;
            this.guardarStorage(resp.usuario._id, this.token, resp.usuario ); 
            
          }   
          
          swal(  
            'Usuario Actualizado',
            resp.usuario.nombre,
            'success'
           );
          return true;
      } ) )
  }



  cambiarImagen ( archivo: File, id: string ) {
    //llamado al metodo del servicio SUBIR cambiarImagen
    
    this.sas.subirArchivo( archivo, 'usuarios' , id )

      .then( (resp : any) => {
        console.log (resp);
        this.usuario.img = resp.usuario.img;
        this.tipo = 'usuarios';
        swal(
          'Imagen Actualizada',
          this.usuario.nombre,
          'success'
        );

        //guardarStorage
        this.guardarStorage( id, this.token, this.usuario );
      } )

      .catch( (resp : any) => {
        console.log (resp);
      } )
  }


  cargarUsuarios( desde : number ) {
    let url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get( url );
  }
  	
  buscarUsuario( termino : string ) {
   

    let url = URL_SERVICIOS + '/busqueda/todo/coleccion/usuario/' + termino;
    
    return this.http.get( url );
  }


  borrarUsuario( id: string ) {
    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;

    return this.http.delete( url )
      .pipe(map(res => {
        swal ('Usuario borrado', 'El usuario a sido eliminado correctamente', 'success');
        return true;
      }))
  }
}
