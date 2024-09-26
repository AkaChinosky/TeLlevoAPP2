import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  register(email: string, password: string): boolean {
    
    const storedUser = localStorage.getItem('user');
    if (storedUser && JSON.parse(storedUser).email === email) {
      console.error('El usuario ya está registrado.');
      return false;
    }

    
    const newUser = { email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('Usuario registrado exitosamente:', email);
    return true;
  }

  
  login(email: string, password: string): boolean {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error('No hay usuarios registrados.');
      return false;
    }

    const user = JSON.parse(storedUser);
    
    if (user.email === email && user.password === password) {
      
      localStorage.setItem('authToken', 'fake-jwt-token');
      console.log('Inicio de sesión exitoso.');
      return true;
    } else {
      console.error('Correo o contraseña incorrectos.');
      return false;
    }
  }

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  
  logout(): void {
    localStorage.removeItem('authToken');
    console.log('Sesión cerrada.');
  }
}
