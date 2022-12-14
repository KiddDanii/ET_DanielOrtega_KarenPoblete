import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nombre: string;
  password: string;
  email: string;
  rut: string;
  numero: string;
  tipo: string ;
}

const ITEMS_KEY = 'usuarios';

@Injectable({
  providedIn: 'root'
})
export class ServicedatosService {

  //private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
   }

   //crea el storage
  async init(){
    const storage = await this.storage.create();
    //this._storage = storage;
  }

  async addUsuario(usuario: Usuario): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((usuarios: Usuario[])=>{
      if(usuarios){
        usuarios.push(usuario);
        return this.storage.set(ITEMS_KEY, usuarios);
      }
      else {
        return this.storage.set(ITEMS_KEY, [usuario]);
      }
    });
  }

  async getUsuarios(): Promise<Usuario[]>{
    return this.storage.get(ITEMS_KEY);
  }

  async deleteDatos(nombre: string): Promise<Usuario>{
    return this.storage.get(ITEMS_KEY).then((datos: Usuario[])=>{
      if (!datos || datos.length === 0){
        return null;
      }
      let toKeep: Usuario[] = [];
      for (let user of datos){
        if (user.nombre !== nombre){
          toKeep.push(user);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

}
