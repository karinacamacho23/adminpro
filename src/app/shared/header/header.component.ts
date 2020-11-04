import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuario/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( public us : UsuariosService ) { }

  ngOnInit(): void {
  }

}
