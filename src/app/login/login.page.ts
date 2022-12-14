import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ServicedatosService, Usuario } from '../services/servicedatos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private serviceDatos: ServicedatosService,
    private alertController: AlertController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    this.serviceDatos.getUsuarios().then((usuarios: Usuario[]) => {
      let correcto = false;
      usuarios.forEach((usuario: Usuario) => {
        if(usuario.email === this.email && usuario.password === this.password) {
          correcto = true;
          localStorage.setItem('ingresado', usuario.tipo);
          localStorage.setItem('nombre', usuario.nombre);
          if(usuario.tipo === 'alumno') {
            this.navController.navigateRoot('/alumno');
          } else if(usuario.tipo === 'profesor') {
            this.navController.navigateRoot('/docente');
          } else {
            correcto = false;
          }
        }
      });
      if(!correcto) {
        this.presentAlert();
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Datos inválidos',
      message: 'Correo o contraseña ingresados no son correctos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

}
