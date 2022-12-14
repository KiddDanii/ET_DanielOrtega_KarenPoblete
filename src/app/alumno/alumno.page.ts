import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  public nombre = localStorage.getItem('nombre');

  constructor(
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  public cerrarSesion() {
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('/');
  }

  public onClick(){

  }

}
