import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {
  constructor(
    private navController: NavController,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tipo = localStorage.getItem('ingresado');
    if(tipo != null) {
      if(tipo === 'profesor') {
        this.navController.navigateRoot('/docente');
      } else if (tipo === 'alumno') {
        this.navController.navigateRoot('/alumno');
      }
      return false;
    } else {
      return true;
    }
  }
}
