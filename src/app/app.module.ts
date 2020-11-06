import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Modulo donde tengo mis servicios*/
import { ServiceModule } from './services/service.module';

//Para el formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*rutas*/

import { APP_ROUTE } from './app.routes';


  /*Modulos*/
 import { PageModule } from './pages/page.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    
   
    /*NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,*/
  ],
  imports: [
    BrowserModule,
    APP_ROUTE,
    PageModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
