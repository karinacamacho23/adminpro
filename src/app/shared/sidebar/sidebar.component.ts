import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuariosService } from '../../services/service.index';
import { Usuarios } from '../../models/usuarios.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  usuario : Usuarios;
  tipo : string ;
  constructor( public _sidebar : SidebarService,
  			   public us: UsuariosService ) { }

  ngOnInit(): void {
  	this.usuario = this.us.usuario;
    this.tipo = 'usuarios';
  }

}
