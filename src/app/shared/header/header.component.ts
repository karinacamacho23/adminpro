import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuario/usuarios.service';

import { Usuarios } from '../../models/usuarios.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  usuario : Usuarios;
  tipo : string;
  constructor( public us : UsuariosService ) { 
  	

 }
  


  ngOnInit(): void {
  	this.usuario = this.us.usuario;
    this.tipo = 'usuarios';
  }

}
