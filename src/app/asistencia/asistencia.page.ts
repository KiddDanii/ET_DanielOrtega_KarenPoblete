import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { IAsistencias } from '../iasistencias';
import { AsistenciaService } from '../services/asistencia.service'; 

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  asistencias: IAsistencias =
  {
    nombreAlumno: '',
    seccion: '',
    asignatura:'',
    fecha:''
  }
  asistencia: any


  constructor(private AsistenciaServicio: AsistenciaService, private loadCtrl: LoadingController) { }

  ngOnInit() {
    //this.loadClases();
    this.AsistenciaServicio.ObtenerAsistencia().subscribe(resp => {
      console.log('Asistencia', resp);
      this.asistencia = resp;
      console.log(this.asistencia);
    });
    
    //this.AsistenciaServicio.CargarAsistencia(this.asistencia).subscribe(); 
  };

  onSubmit() {
    console.log('La clase se ha generado con exito');
    console.log(this.asistencias);
    this.AsistenciaServicio.CargarAsistencia(this.asistencias).subscribe();
  };
}