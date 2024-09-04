import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage {

  constructor(private navCtrl: NavController) {}

  onProgramarViaje() {
    
    console.log('Viaje programado');
    
    this.navCtrl.navigateBack('/inicio');
  }
}
