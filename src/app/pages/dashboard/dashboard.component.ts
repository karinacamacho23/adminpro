import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from '../../components/moda-upload/modal-upload.service';

@Component({

  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ],
  //providers: [ModalUploadService]
})
export class DashboardComponent implements OnInit {
  
  
  constructor( /*public ms: ModalUploadService*/ ) { }

  ngOnInit(): void {
  	//this.ms.ocultarModal();
  }
}
