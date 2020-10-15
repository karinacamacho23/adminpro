import { Routes, RouterModule } from '@angular/router';

/*componentes*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficos1Component } from './graficos1/graficos1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';

const pagesRoutes : Routes = [
	{
	 path: '',
	 component: PagesComponent,
	 children : [
	 	{ path: 'dashboard', component: DashboardComponent },
	 	{ path: 'graficos', component: Graficos1Component },
		{ path: 'progress', component: ProgressComponent },
		{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }
	 ]

	},

];

export const PAGES_ROUTE = RouterModule.forChild ( pagesRoutes );