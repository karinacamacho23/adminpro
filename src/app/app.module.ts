import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*rutas*/

import { APP_ROUTE } from './app.routes';


  /*Modulos*/
 import { PageModule } from './pages/page.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

/*import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';*/

import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    /*NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,*/
  ],
  imports: [
    BrowserModule,
    APP_ROUTE,
    PageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
