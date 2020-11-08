import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuarios } from '../models/usuarios.model';
import { UsuariosService } from '../services/usuario/usuarios.service';

declare const gapi : any; //google

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email : string; 
  auth2 : any; //google

  constructor( private _router : Router,
               private _us : UsuariosService ) { }

  ngOnInit(): void {

    this.googleInit();


    this.email = localStorage.getItem( 'email' ) || '';
    if ( this.email.length >  1 ) {
      this.recuerdame= true;
    }
    
  }


  googleInit() {
    gapi.load('auth2', () => {
      this.auth2= gapi.auth2.init({
        client_id: '647907935130-ij2v2m160qmtu1sk1bsqpeaf2l5gre85.apps.googleusercontent.com', 
        cookiepolicy:'single_host_origin',
        scope: 'profile email'        
      });

      this.attachSingin( document.getElementById('btnGoogle') ) 

    })
  }

  attachSingin ( element ) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {

     /* let profile = googleUser.getBasicProfile();
*/
      let token = googleUser.getAuthResponse().id_token;
      console.log(token );
      //llamado del servicio
      this._us.loginGoogle( token )
        .subscribe( resp => window.location.href = '#/dashboard');

    })
  }

  ingresar ( formulario : NgForm ) {


    if ( !formulario.status ) {
      return;
    }

    let usuario = new Usuarios( null, formulario.value.email, formulario.value.password);

    this._us.login( usuario, formulario.value.recuerdame )
      .subscribe( correcto => /*this._router.navigate(['/dashboard'])*/window.location.href = '#/dashboard' )


  	/*this._router.navigate(['/dashboard']);
  	console.log( 'Ingresando...' );*/
  }
}
