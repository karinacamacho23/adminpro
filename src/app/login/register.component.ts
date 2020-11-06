import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
//Servicio registrarUsuario
import { UsuariosService } from '../services/service.index';
//Model Usuariuo
import { Usuarios } from '../models/usuarios.model';
//Navegar a otra pag
import { Router } from '@angular/router';

//sweetalert
import swal from 'sweetalert'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

	forma : FormGroup;
	constructor( private _us : UsuariosService, 
				 private router : Router ) { }

	sonIguales ( campo1: string , campo2: string ) {
		return ( group: FormGroup ) => {
			let pass1 = group.controls[campo1].value;
			let pass2 = group.controls[campo2].value;
			if ( pass1 === pass2 ){
				return null;
			}


			return {
				sonIguales: true
			}
		};
		
	}

	ngOnInit(): void {
		this.forma = new FormGroup ({
			nombre: new FormControl (null, Validators.required),
			correo: new FormControl (null, Validators.required),
			password1: new FormControl (null, Validators.required),
			password2: new FormControl (null, Validators.required),
			condiciones: new FormControl (false, Validators.required)
		}, { validators: this.sonIguales('password1','password2') }   );
	
		/*this.forma.setValue({
			nombre: 'test',
			correo: 'test@test.com',
			password1: '123456' ,
			password2: '1234567',
			condiciones: true
		});*/
		
	}



	registrarUsuario (  ) {

		//console.log (this.forma.value);
		//para validar si elusuario manda formularios vacios
		if ( this.forma.invalid ) {
			return;
		}

		if ( !this.forma.value.condiciones ) {
			//se modifica segun su estilo
			swal("Importante", "Debe aceptar las condiciones", "warning");
		}
		
		let usuario = new Usuarios (
			this.forma.value.nombre,
			this.forma.value.correo,
			this.forma.value.password1		
				
		); 
		//llamar el servicio
		this._us.crearUsuario( usuario )
			.subscribe( data => this.router.navigate (['/login']) );
	}

}
