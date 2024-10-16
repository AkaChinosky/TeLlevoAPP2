import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ViajesService } from '../../guards/services/viajes.service'; 

@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage implements OnInit {
  viajes: any[] = [];

  constructor(private navCtrl: NavController, private viajesService: ViajesService) {}

  ngOnInit() {
    this.viajes = this.viajesService.obtenerViajes(); 
  }

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToHome() {
    this.navCtrl.navigateBack('/inicio-sesion');
  }

  verDetallesViaje(viaje: { destino: any; }) {
    // Navegar a la página de detalles del viaje
    this.navCtrl.navigateForward(`/detalles-viaje/${viaje.destino}`);
  }
}
