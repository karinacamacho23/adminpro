import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
//usar  Usuario Service
import { UsuariosService } from '../usuario/usuarios.service';

	@Injectable({
	  providedIn: 'root'
	})


export class LoginGuardGuard implements CanActivate {

	constructor ( public _us : UsuariosService,
				  public router : Router ) { 
		this._us.cargarStorage();
/*		let token = this._us.enviar_token();
		this._us.cargarBackend(_us.usuario, token );*/
	}



	canActivate() {


		if ( this._us.estaLogueado() ) {
			console.log ('paso por el login Gard');
	    	return true;
		} else {
			console.log ('bloqueado por el login Gard');
			this.router.navigate(['/login']);//si esta bloqueado que se salga de la app 
	    	return false;
		}
	  	
	}

	  
}
