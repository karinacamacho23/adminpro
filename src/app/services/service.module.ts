import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//http
import { HttpClientModule } from '@angular/common/http';

import { 
	SettingsService, 
	SharedService, 
	SidebarService,
  UsuariosService,
  LoginGuardGuard 
} from './service.index';


@NgModule({
  declarations: [],
  providers : [
  	SettingsService, 
  	SharedService, 
  	SidebarService,
    UsuariosService,
    LoginGuardGuard 
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
