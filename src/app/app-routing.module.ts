import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaInicioComponent } from './componentes/pantalla-inicio/pantalla-inicio.component';
import { CreacionEquipoComponent } from './componentes/Creacion/creacion-equipo/creacion-equipo.component';
import { CreacionCampeonatoComponent } from './componentes/Creacion/creacion-campeonato/creacion-campeonato.component';
import { DetallesCampeonatoComponent } from './componentes/Detalles/detalles-campeonato/detalles-campeonato.component';
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


const routes: Routes = [
  {path: 'inicio', component: PantallaInicioComponent},
  {path: 'resultado-partido/:id', component: ResultadoPartidoComponent},
  {path: 'anuncio-ganador/campeonato/:idCampeonato', component: AnuncioGanadorComponent},

  {path: 'campeonato/nuevo', component: CreacionCampeonatoComponent},
  {path: 'equipo/:idEquipo/jugador/nuevo', component: CreacionJugadorComponent},
  {path: 'campeonato/:idCampeonato/equipo/nuevo', component: CreacionEquipoComponent},
  

  {path: 'detalles-campeonato/:id', component: DetallesCampeonatoComponent},
  {path: 'detalles-equipo/:id', component: DetallesEquipoComponent},
  {path: 'detalles-jugador/:id', component: DetallesJugadorComponent},
  {path: 'detalles-etapa/:idEtapa', component: DetallesEtapaComponent},
  {path: 'detalle-etapa/:idEtapa', component: DetallesEtapaComponent},
  {path: 'detalles-partido/:id', component: DetallesPartidoComponent},

  {path: 'edicion-campeonato/:id', component: EdicionCampeonatoComponent},
  {path: 'edicion-equipo/:id', component: EdicionEquipoComponent},
  {path: 'edicion-jugador/:id', component: EdicionJugadorComponent},


  {path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
