import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  
  goToProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToProgramarViaje() {
    this.navCtrl.navigateForward('/programar-viaje');
  }

  goToBuscarTransporte() {
    this.navCtrl.navigateForward('/buscar-transporte');
  }

  goToMisViajes() {
    this.navCtrl.navigateForward('/mis-viajes');
  }

  goToAjustes() {
    this.navCtrl.navigateForward('/ajustes');
  }

  goToHome() {
    this.navCtrl.navigateBack('/home');
  } 

  ngOnInit() {
    
  }

} 
