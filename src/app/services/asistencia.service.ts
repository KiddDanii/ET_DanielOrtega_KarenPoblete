import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Iasistencia } from '../iasistencia';
import { environment } from 'src/environments/environment';
import { IAsistencias } from '../iasistencias';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http:HttpClient) {}

  ObtenerAsistencia():Observable<Iasistencia>{
    return this.http.get<Iasistencia>(`${environment.apiURLAsistencias}`)
  }

  CargarAsistencia(NuevaAsistencia:IAsistencias):Observable<IAsistencias>{
    return this.http.post<IAsistencias>(`${environment.apiURLAsistencias}`,NuevaAsistencia)
  }
  
}
