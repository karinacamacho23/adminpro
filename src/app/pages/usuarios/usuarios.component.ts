import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/service.index';
import { map } from 'rxjs/operators';


//PAGINACION
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  cargando : boolean = true;
  usuarios : Usuarios[] = [];
  desde : number = 0;
  totalRegistro : number = 0;

  constructor( private us : UsuariosService ) { }

  ngOnInit(): void {
  	this.cargarUsuarios();
  }

  cargarUsuarios () {
  	this.us.cargarUsuarios( this.desde )
  		.subscribe( (resp : any) => {
  			this.cargando = false;
  			this.totalRegistro = resp.total
  			this.usuarios = resp.usuarios;
  		} )
  }

  cambiarDesde( valor : number ) {
  	let desde = this.desde + valor;
  	//validaciones
  	if( desde >= this.totalRegistro ) { return }

  	if ( desde < 0 ) { return }

  	//actualiza valor
  	this.desde += valor;
  	this.cargarUsuarios();
  }

  buscarUsuario( termino : string ) {
  	this.cargando = true;
  	if ( termino.length <= 0 ) {
  		this.cargarUsuarios();
  		return;

  	}

  	this.us.buscarUsuario( termino )
  		.subscribe( (resp : any) => {
  			this.cargando = false;        
  			this.usuarios = resp.usuario;
        console.log (this.usuarios);
  		});
  
  }

}
