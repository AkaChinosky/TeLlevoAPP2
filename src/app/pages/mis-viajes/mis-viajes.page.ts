import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ViajesService } from './../../guards/services/viajes.service';


@Component({
  selector: 'app-mis-viajes',
  templateUrl: './mis-viajes.page.html',
  styleUrls: ['./mis-viajes.page.scss'],
})
export class MisViajesPage implements OnInit {
  viajes = [
    { destino: 'Playa', fecha: new Date() },
    { destino: 'Montaña', fecha: new Date() },
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Aquí podrías cargar los viajes desde un servicio, por ejemplo.
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
