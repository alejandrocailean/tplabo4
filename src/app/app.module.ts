import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { RutaJuegosComponent } from './componentes/ruta-juegos/ruta-juegos.component';
import { RutaAboutComponent } from './componentes/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/ruta-home/ruta-home.component';
import { RutaResultadosComponent } from './componentes/ruta-resultados/ruta-resultados.component';
import { AdivinaElNumeroComponent } from './componentes/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AnagramaComponent } from './componentes/Juegos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { TatetiComponent } from './componentes/Juegos/tateti/tateti.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    RutaJuegosComponent,
    RutaAboutComponent,
    RutaHomeComponent,
    RutaResultadosComponent,
    AdivinaElNumeroComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    TatetiComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
