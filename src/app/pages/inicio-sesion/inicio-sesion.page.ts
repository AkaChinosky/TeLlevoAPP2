import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../guards/services/auth.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async onLogin() {
    if (this.isValidEmail(this.email) && this.password.length >= 5) {
      try {
        console.log('Intento de iniciar sesión con:', this.email);

        
        const success = await this.authService.login(this.email, this.password);

        if (success) {
          
          this.router.navigate(['/inicio']);
        } else {
          
          alert('Correo o contraseña incorrectos.');
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        alert('Hubo un problema con el inicio de sesión. Inténtelo nuevamente más tarde.');
      }
    } else {
      
      if (!this.isValidEmail(this.email)) {
        alert('Por favor ingrese un correo válido.');
      } else if (this.password.length < 5) {
        alert('La contraseña debe tener al menos 5 caracteres.');
      }
    }
  }

  
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
  goToRestablecerContrasena() {
    this.router.navigate(['/restablecer-contrasena']);
  }

  
  goToUnirseViaje() {
    this.router.navigate(['/unirse-viaje']);
  }
}
