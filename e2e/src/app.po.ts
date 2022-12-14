import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(destination) {
    return browser.get(destination);
  }
  getTitulo(){
    return element(by.css('app-root h1')).getText();
  }
  getParrafo(){
    return element(by.css('app-root p')).getText();
  }
  getBoton(){
    return element(by.css('app-root ion-button')).getText();
  }
  getInput(){
    return element(by.css('app-root ion-input')).getText();
  }
  getTitule(){
    return element(by.css('app-root ion-title')).getText();
  }
}
