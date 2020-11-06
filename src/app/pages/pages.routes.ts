import { Routes, RouterModule, CanActivate } from '@angular/router';

/*componentes*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { PerfilComponent } from './perfil/perfil.component';

const pagesRoutes : Routes = [
	{
	 path: '',
	 component: PagesComponent,
	 canActivate: [ LoginGuardGuard ],
	 children : [
	 	{ path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
	 	{ path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de Usuario' } },
	 	{ path: 'graficos', component: Graficos1Component, data: { titulo: 'Graficos' } },
		{ path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
		{ path: 'accout-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
		{ path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
		{ path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
	 ]

	},

];

export const PAGES_ROUTE = RouterModule.forChild ( pagesRoutes );