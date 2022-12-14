import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Iniciar sesión', url: '/login', icon: 'log-in' },
    {title: 'Inicio', url: '/home', icon: 'home' },
    //{ title: 'QR', url: '/qr', icon: 'qr-code' },
    {title: 'Preguntas Frecuentes', url: '/preguntas', icon: 'help' },
    {title: 'Feriados', url: '/feriados', icon: 'calendar'}
  ];

  constructor() {}
}
