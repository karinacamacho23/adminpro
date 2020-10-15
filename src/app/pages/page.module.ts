
/*
IMPORTACIONES*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*import { FormsModule } from '@angular/forms';*/


	/*Modulos*/
import { SharedModule } from '../shared/shared.module';

	/*Rutas*/
import { PAGES_ROUTE } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({ 
	declarations: [
		DashboardComponent,
    	ProgressComponent,
    	Graficos1Component,
    	PagesComponent,
    	IncrementadorComponent
	],

	exports: [
		DashboardComponent,
    	ProgressComponent,
    	Graficos1Component,
    	PagesComponent,
    	IncrementadorComponent
	],

	imports: [
		SharedModule,
		PAGES_ROUTE,
		FormsModule
	],

	providers: [],





}) /*End of NgModule*/


export class PageModule { } 