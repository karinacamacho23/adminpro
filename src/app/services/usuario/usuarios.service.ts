import { Injectable } from '@angular/core';
//modelUsuario
import { Usuarios } from '../../models/usuarios.model';
//Const url
import { URL_SERVICIOS } from '../../config';
//http
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  usuario: Usuarios;
  token : string;

  constructor( private http : HttpClient,
               private router : Router ) { 
  	console.log('Servicio Usuario listo de usar!') 
  }

  estaLogueado () { //evaluar el tooken
    return (this.token.length >5 ) ? true : false;

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
 
  guardarStorage ( id: string, token:string, usuario:Usuarios ) {
    localStorage.setItem( 'id', id );//modificado _id
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

    this.router.navigate(['/login']);
  }

  loginGoogle ( token: string ) {
    let url = URL_SERVICIOS + '/login/google';
    return this.http.post( url, {token} )//lo mismo que colocar {token:token}
      .pipe(
          (map (( resp:any) => {
            this.guardarStorage(resp._id, resp.token, resp.usuario);
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
  				localStorage.setItem( 'usuario',  JSON.stringify(usuario) );
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
  			
}
