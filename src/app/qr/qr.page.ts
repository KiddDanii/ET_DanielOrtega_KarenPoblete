import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {
  fechahoy = new Date();
  qrCodeString= 'No se ha ingresado Sección'; 
  scannedResult:any;
  constructor(private AlertController:AlertController) { }

  ngOnInit() {
  }
  usuario={
    nom:'',
  }

generaScan(){
    this.qrCodeString=('PGY4121- ').concat(this.usuario.nom);
    this.qrCodeString=this.qrCodeString.concat(' '+ this.fechahoy.getDate()+'-'+ (this.fechahoy.getMonth()+1) +'-'+this.fechahoy.getFullYear());

  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }


  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Alerta',
      message: 'La asistencia se ha registrado correctamente!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
