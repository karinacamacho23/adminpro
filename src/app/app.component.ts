import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor ( public _setting : SettingsService ) {}
/* NOTA:  hago la inyeccion del servicio para que cuando carge el app.component
  en el constructor del servicio llame el metodo donde hace el trabajo
  de actualizar el cambio que el usuario quiere

  Ir al SettingsService*/
}
