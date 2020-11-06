import { NgModule } from '@angular/core';
/*import { CommonModule } from '@angular/common'; Encargado  del ngIf ngFor*/
import { ImagenPipe } from './imagen.pipe';


@NgModule({
  declarations: [
  	ImagenPipe
  ],

  exports : [
  	ImagenPipe
  ],

  imports: [
  
 //CommonModule
  ]
})
export class PipesModule { }
