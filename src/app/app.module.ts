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
import { DetallesJugadorComponent } from './componentes/Detalles/detalles-jugador/detalles-jugador.component';
import { EdicionCampeonatoComponent } from './componentes/Edicion/edicion-campeonato/edicion-campeonato.component';
import { EdicionEquipoComponent } from './componentes/Edicion/edicion-equipo/edicion-equipo.component';
import { EdicionJugadorComponent } from './componentes/Edicion/edicion-jugador/edicion-jugador.component';
import { DetallesEtapaComponent } from './componentes/Detalles/detalles-etapa/detalles-etapa.component';
import { DetallesPartidoComponent } from './componentes/Detalles/detalles-partido/detalles-partido.component';
import { ResultadoPartidoComponent } from './componentes/resultado-partido/resultado-partido.component';
import { AnuncioGanadorComponent } from './componentes/anuncio-ganador/anuncio-ganador.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaInicioComponent,
    CreacionCampeonatoComponent,
    DetallesCampeonatoComponent,
    CreacionEquipoComponent,
    DetallesEquipoComponent,
    CreacionJugadorComponent,
    DetallesJugadorComponent,
    EdicionCampeonatoComponent,
    EdicionEquipoComponent,
    EdicionJugadorComponent,
    DetallesEtapaComponent,
    DetallesPartidoComponent,
    ResultadoPartidoComponent,
    AnuncioGanadorComponent,

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
