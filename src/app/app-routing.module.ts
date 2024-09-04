import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./pages/restablecer-contrasena/restablecer-contrasena.module').then(m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'programar-viaje',
    loadChildren: () => import('./pages/programar-viaje/programar-viaje.module').then(m => m.ProgramarViajePageModule)
  },
  {
    path: 'unirse-viaje',
    loadChildren: () => import('./pages/unirse-viaje/unirse-viaje.module').then(m => m.UnirseViajePageModule)
  },
  {
    path: 'descargar-apk',
    loadChildren: () => import('./pages/descargar-apk/descargar-apk.module').then(m => m.DescargarApkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
