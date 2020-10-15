import { Routes, RouterModule } from '@angular/router';

/*componentes*/
/*import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficos1Component } from './pages/graficos1/graficos1.component';
import { ProgressComponent } from './pages/progress/progress.component';
*/import { LoginComponent } from './login/login.component';
import {  NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


import { RegisterComponent } from './login/register.component';

const appRoutes : Routes = [

	/*separando rutas*/
/*	{
	 path: '',
	 component: PagesComponent,
	 children : [
	 	{ path: 'dashboard', component: DashboardComponent },
	 	{ path: 'graficos', component: Graficos1Component },
		{ path: 'progress', component: ProgressComponent },
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
	 ]

	},*/
	
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	/*,*/
	{ path: '**', component:  NopagefoundComponent }
];

export const APP_ROUTE = RouterModule.forRoot ( appRoutes, { useHash : true } )