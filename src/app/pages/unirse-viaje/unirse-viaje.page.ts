import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-unirse-viaje',
  templateUrl: './unirse-viaje.page.html',
  styleUrls: ['./unirse-viaje.page.scss'],
})
export class UnirseViajePage {

  constructor(private navCtrl: NavController) {}

  onUnirseViaje() {
    
    console.log('Te has unido al viaje');
    
    this.navCtrl.navigateBack('/inicio');
  }
}
