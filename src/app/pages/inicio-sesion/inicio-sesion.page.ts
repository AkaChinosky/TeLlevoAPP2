import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {

  constructor(private navCtrl: NavController) {}

  onLogin() {
    
    console.log('Iniciar Sesión');
    
    this.navCtrl.navigateForward('/inicio');
  }

  goToRestablecerContrasena() {
    this.navCtrl.navigateForward('/restablecer-contrasena');
  }

  goToUnirseViaje() {
    this.navCtrl.navigateForward('/unirse-viaje');
  }
  
}
