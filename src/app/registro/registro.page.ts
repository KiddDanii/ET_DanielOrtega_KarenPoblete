import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicedatosService, Usuario } from '../services/servicedatos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario: Usuario = {
    nombre: '',
    password: '',
    email: '',
    rut: '',
    numero: '',
    tipo: 'alumno',
  };

  constructor(
    private serviceDatos: ServicedatosService,
    private toastController: ToastController,
    private navController: NavController,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
    this.serviceDatos.addUsuario(this.usuario);
    this.usuario = {
      nombre: '',
      password: '',
      email: '',
      rut: '',
      numero: '',
      tipo: 'alumno',
    };
    this.presentToast();
    this.navController.navigateRoot('/');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario registrado correctamente.',
      duration: 2000
    });
    toast.present();
  }

}
