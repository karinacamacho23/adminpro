
/*
IMPORTACIONES*/
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
/*import { FormsModule } from '@angular/forms';*/


	/*Modulos*/
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

/*ng2-charts*/
import { ChartsModule } from 'ng2-charts';

	/*Rutas*/
import { PAGES_ROUTE } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({ 
	declarations: [
		DashboardComponent,
    	ProgressComponent,
    	Graficos1Component,
    	PagesComponent,
    	IncrementadorComponent,
    	GraficoDonaComponent,
    	AccoutSettingsComponent,
    	PromesasComponent,
    	RxjsComponent,
    	PerfilComponent
	],

	exports: [
		DashboardComponent,
    	ProgressComponent,
    	Graficos1Component,
    	PagesComponent,
    	IncrementadorComponent,
    	GraficoDonaComponent,
    	AccoutSettingsComponent,
    	PromesasComponent,
    	RxjsComponent,
        PerfilComponent
	],

	imports: [
		SharedModule,
		PAGES_ROUTE,
		FormsModule,
		ChartsModule,
		BrowserModule,
        PipesModule
	],

	providers: [],





}) /*End of NgModule*/


export class PageModule { } 