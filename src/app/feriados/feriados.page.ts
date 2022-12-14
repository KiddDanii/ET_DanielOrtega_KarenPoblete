import { Component, OnInit } from '@angular/core';
import { ServiceferiadosService } from '../services/serviceferiados.service';

interface Feriado {
  date: string;
  title: string;
  inalienable: string;
}

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  public todosFeriados: Feriado[] = [];

  constructor(
    private serviceFeriados: ServiceferiadosService,
  ) { }

  ngOnInit() {
    this.todosFeriados = [];
    this.serviceFeriados.obtenerFeriados().then((datos: any) => {
      datos.data.forEach((dato: any) => {
        if(dato.inalienable) {
          this.todosFeriados.push({
            date: dato.date,
            inalienable: 'red',
            title: dato.title,
          } as Feriado);
        } else {
          this.todosFeriados.push({
            date: dato.date,
            inalienable: 'blue',
            title: dato.title,
          } as Feriado);
        }
      });
    });
  }

}
