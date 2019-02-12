import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantallaInicioComponent } from './componentes/pantalla-inicio/pantalla-inicio.component';
import { CreacionCampeonatoComponent } from './componentes/Creacion/creacion-campeonato/creacion-campeonato.component';
import { DetallesCampeonatoComponent } from './componentes/Detalles/detalles-campeonato/detalles-campeonato.component';
import { CreacionEquipoComponent } from './componentes/Creacion/creacion-equipo/creacion-equipo.component';
import { DetallesEquipoComponent } from './componentes/Detalles/detalles-equipo/detalles-equipo.component';
import { CreacionJugadorComponent } from './componentes/Creacion/creacion-jugador/creacion-jugador.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaInicioComponent,
    CreacionCampeonatoComponent,
    DetallesCampeonatoComponent,
    CreacionEquipoComponent,
    DetallesEquipoComponent,
    CreacionJugadorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
