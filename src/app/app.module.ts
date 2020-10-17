import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Modulo donde tengo mis servicios*/
import { ServiceModule } from './services/service.module';

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
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
