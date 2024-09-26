import { Component } from '@angular/core';
import { AuthService } from '../../guards/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Función para validar el formato del correo electrónico
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Función para validar la contraseña (mínimo 6 caracteres)
  isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

  // Método para registrar al usuario
  async onRegister() {
    if (!this.isValidEmail(this.email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (!this.isValidPassword(this.password)) {
      alert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Si todas las validaciones son correctas, se procede con el registro
    try {
      const success = await this.authService.register(this.email, this.password);
      if (success) {
        alert('Usuario registrado exitosamente');
        // Redirigir al inicio de sesión
        this.router.navigate(['/inicio-sesion']);
      } else {
        alert('Hubo un problema con el registro.');
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Hubo un error durante el registro. Inténtelo de nuevo.');
    }
  }
}
