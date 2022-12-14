import { AppPage } from './app.po';

describe('', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  it('Prueba 1', () => {
    page.navigateTo("/");
    expect(page.getTitulo()).toContain('Hola');
  });
  it('Prueba 2', () => {
    page.navigateTo("/");
    expect(page.getParrafo()).toContain('Bienvenido a tu app de asistencia');
  });
  it('Prueba 3', () => {
    page.navigateTo("/");
    expect(page.getBoton()).toContain('Escanear código QR');
  });
  it('Prueba 4', () => {
    page.navigateTo("/");
    expect(page.getInput()).toContain('Correo Institucional');
  });
  it('Prueba 5', () => {
    page.navigateTo("/");
    expect(page.getTitule()).toContain('QR');
  });
});
