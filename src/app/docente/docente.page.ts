import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

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
