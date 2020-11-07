import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadService } from '../components/moda-upload/modal-upload.service';
//http
import { HttpClientModule } from '@angular/common/http';

import { 
	SettingsService, 
	SharedService, 
	SidebarService,
  UsuariosService,
  LoginGuardGuard,
  SubirArchivoService 
} from './service.index';


@NgModule({
  declarations: [],
  providers : [
  	SettingsService, 
  	SharedService, 
  	SidebarService,
    UsuariosService,
    LoginGuardGuard,
    SubirArchivoService,
    ModalUploadService 
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
