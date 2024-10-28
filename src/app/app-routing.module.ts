import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio-sesion', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'programar-viaje',
    loadChildren: () => import('./pages/programar-viaje/programar-viaje.module').then(m => m.ProgramarViajePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'unirse-viaje',
    loadChildren: () => import('./pages/unirse-viaje/unirse-viaje.module').then(m => m.UnirseViajePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'descargar-apk',
    loadChildren: () => import('./pages/descargar-apk/descargar-apk.module').then(m => m.DescargarApkPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },  {
    path: 'mis-viajes',
    loadChildren: () => import('./pages/mis-viajes/mis-viajes.module').then( m => m.MisViajesPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
