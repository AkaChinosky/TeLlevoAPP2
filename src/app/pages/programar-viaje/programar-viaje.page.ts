import { ViajesService } from './../../guards/services/viajes.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage implements OnInit {

  map: mapboxgl.Map | undefined;
  currentLocation: [number, number] = [-70.6506, -33.4372]; 
  selectedDestination: [number, number] = [-70.6506, -33.4372]; 
  
  passengers = [
    { name: 'Juan Pérez', photo: 'ruta_foto.jpg' },
    { name: 'María López', photo: 'ruta_foto2.jpg' }
  ];

  driver = {
    name: 'Carlos Gómez',
    photo: '/TeLlevoAPP/src/assets/img/mauri.png',
    costPerPerson: 3000,
    capacity: 4,
    currentLocation: '',
    date: new Date()
  };

  driver1 = {
    name: 'Tay Kila',
    photo: '/TeLlevoAPP/src/assets/img/mauri.png',
    costPerPerson: 4500,
    capacity: 6,
    currentLocation: '',
    date: new Date()
  };

  constructor(private navCtrl: NavController , private viajesService: ViajesService) {}

  ngOnInit() {
    this.initializeMap();
    this.getCurrentLocation();
  }

  initializeMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiY2hpbm9za3kiLCJhIjoiY20xaWtqMThmMHI2ZjJqcHlrMHFrYnE3aCJ9.y_7tbJeGrYjci5z9_PtqRg';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: this.currentLocation,
      zoom: 12
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    const el = document.createElement('div');
    el.className = 'vehicle-marker';
    el.innerHTML = '🚗';

    new mapboxgl.Marker(el)
      .setLngLat(this.currentLocation)
      .addTo(this.map);

    
    this.map.on('click', (event: any) => {
      this.selectedDestination = [event.lngLat.lng, event.lngLat.lat];
      this.addDestinationMarker(this.selectedDestination);
      this.plotRoute();
    });
  }

  addDestinationMarker(destination: [number, number]) {
    if (this.map) {
      const el = document.createElement('div');
      el.className = 'destination-marker';
      el.innerHTML = '📍';

      new mapboxgl.Marker(el)
        .setLngLat(destination)
        .addTo(this.map);
    }
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.currentLocation = [position.coords.longitude, position.coords.latitude];

      if (this.map) {
        this.map.setCenter(this.currentLocation);

        new mapboxgl.Marker()
          .setLngLat(this.currentLocation)
          .addTo(this.map);
      }
    });
  }

  plotRoute() {
    const routeCoordinates = [
      this.currentLocation,
      this.selectedDestination
    ];

    if (this.map) {
      if (this.map.getLayer('route')) {
        this.map.removeLayer('route');
        this.map.removeSource('route');
      }

      this.map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: routeCoordinates
            }
          }
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3880ff',
          'line-width': 5
        }
      });
    }
  }

  removePassenger(index: number) {
    this.passengers.splice(index, 1);
  }

  addPassenger() {
    const newPassenger = { name: 'Nuevo Pasajero', photo: 'default_photo.jpg' };
    this.passengers.push(newPassenger);
  }

  onProgramarViaje() {
    const viaje = {
      pasajeros: this.passengers,
      conductor: this.driver,
      destino: this.selectedDestination,
      fecha: new Date(),
    };
    
    this.viajesService.agregarViaje(viaje); // Agregar el viaje al servicio
    console.log('Viaje programado con los siguientes datos:', viaje);
    this.navCtrl.navigateForward('/mis-viajes'); // Redirigir a Mis Viajes
  }
}