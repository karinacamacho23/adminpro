import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/service.index';
import { map } from 'rxjs/operators';
import { ModalUploadService } from '../../components/moda-upload/modal-upload.service';


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

  constructor( public us : UsuariosService,
               public ms : ModalUploadService ) { }

  ngOnInit(): void {
  	this.cargarUsuarios();
    this.ms.notificacion
      .subscribe( res => this.cargarUsuarios() )
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
  		});
  }
  
  

  borrarUsuario ( usuario : Usuarios ) {

    if ( usuario._id === this.us.usuario._id ) {
      swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }

    swal({
      title: 'Estas Seguro?',
      text: 'Estas a punto de borrar a ' + usuario.nombre,
      icon : 'warning',
      buttons: ["cancelar " , true],
      dangerMode: true,
    })

    .then( borrar => {

      if ( borrar ) {
        this.us.borrarUsuario( usuario._id )
          .subscribe( borrado => {
            this.desde = 0;
            this.cargarUsuarios();
          } )
      }
    } )
    
  }

  guardarUsuario( usuario : Usuarios ) {
    this.us.actualizarUsuario( usuario ).subscribe();
  }


  mostrarModal ( id: string ) {
    this.ms.mostrarModal( 'usuarios', id );

  }

}
