import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  notificationsEnabled: boolean = true; // Valor inicial para notificaciones
  selectedLanguage: string = 'es'; // Valor inicial para idioma
  darkModeEnabled: boolean = false; // Valor inicial para modo oscuro

  constructor(private router: Router) { }

  ngOnInit() {
    // Cargar configuraciones previas si las tienes
    this.loadSettings();
  }

  loadSettings() {
    const darkMode = localStorage.getItem('darkMode');
    this.darkModeEnabled = darkMode === 'true';
    this.toggleDarkMode(); // Aplica el modo oscuro si está habilitado
  }

  toggleDarkMode() {
    if (this.darkModeEnabled) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }

  onDarkModeToggle() {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.toggleDarkMode();
  }

  logout() {
    console.log("Sesión cerrada");
    this.router.navigate(['/inicio-sesion']); // Cambia esto a la ruta de tu página de login
  }
}
