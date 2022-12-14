import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceferiadosService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  async obtenerFeriados(): Promise<any> {
    return this.httpClient.get('https://api.victorsanmartin.com/feriados/en.json').toPromise();
  }

}
