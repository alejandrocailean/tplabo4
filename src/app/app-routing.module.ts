import { ErrorHandler, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { RutaAboutComponent } from './componentes/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/ruta-home/ruta-home.component';
import { RutaJuegosComponent } from './componentes/ruta-juegos/ruta-juegos.component';
import { RutaResultadosComponent } from './componentes/ruta-resultados/ruta-resultados.component';


const routes: Routes = [
  {path:"",component:RutaHomeComponent},
  {path:"ruta-juegos",component:RutaJuegosComponent},
  {path:"ruta-about",component:RutaAboutComponent},
  {path:"ruta-resultados",component:RutaResultadosComponent},
  {path:"ruta-adivinaElNumero",component:AdivinaElNumeroComponent},
  {path:"**",component:ErrorHandler}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
