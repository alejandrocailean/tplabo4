import { ErrorHandler, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdivinaElNumeroComponent } from './componentes/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/Juegos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './componentes/Juegos/tateti/tateti.component';
import { RutaAboutComponent } from './componentes/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/ruta-home/ruta-home.component';
import { RutaJuegosComponent } from './componentes/ruta-juegos/ruta-juegos.component';
import { RutaResultadosComponent } from './componentes/ruta-resultados/ruta-resultados.component';


const routes: Routes = [
  {path:"",component:RutaHomeComponent},
  {path:"ruta-juegos",component:RutaJuegosComponent,
    children: [
      {path:'ruta-adivina-el-numero', component:AdivinaElNumeroComponent},
      {path:'ruta-agilidad-aritmetica', component:AgilidadAritmeticaComponent},
      {path:'ruta-anagrama',component:AnagramaComponent},
      {path:'ruta-piedra-papel-tijera',component:PiedraPapelTijeraComponent},
      {path:'ruta-tateti',component:TatetiComponent}
    ]
  },
  {path:"ruta-about",component:RutaAboutComponent},
  {path:"ruta-resultados",component:RutaResultadosComponent},
  //{path:"ruta-adivinaElNumero",component:AdivinaElNumeroComponent},
  {path:"**",component:ErrorHandler}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
