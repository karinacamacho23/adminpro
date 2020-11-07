import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


	menu : any = [
		{
			titulo : 'Principal',
			icono  : 'mdi mdi-gauge',
			submenu: [
				{ titulo : 'Dasboard', url : '/dashboard' },
				{ titulo : 'Progress', url : '/progress' },
				{ titulo : 'Graficos', url : '/graficos' },
				{ titulo : 'Promesas', url : '/promesas' },
				{ titulo : 'RxJs', url : '/rxjs' }	
			]		
		},

		{
			titulo : 'Mantenimiento',
			icono  : 'mdi mdi-folder-lock-open',
			submenu: [
				{ titulo : 'Usuarios', url : '/usuario' },
				{ titulo : 'Hospitales', url : '/hospital' },
				{ titulo : 'Medicos', url : '/medico' }
				
			]
		}
	];

	constructor() {  }
}
