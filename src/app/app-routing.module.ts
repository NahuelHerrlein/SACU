import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantallaInicioComponent } from './componentes/pantalla-inicio/pantalla-inicio.component';
import { CreacionEquipoComponent } from './componentes/Creacion/creacion-equipo/creacion-equipo.component';
import { CreacionCampeonatoComponent } from './componentes/Creacion/creacion-campeonato/creacion-campeonato.component';
import { DetallesCampeonatoComponent } from './componentes/Detalles/detalles-campeonato/detalles-campeonato.component';
import { DetallesEquipoComponent } from './componentes/Detalles/detalles-equipo/detalles-equipo.component';
import { CreacionJugadorComponent } from './componentes/Creacion/creacion-jugador/creacion-jugador.component';


const routes: Routes = [
  {path: 'inicio', component: PantallaInicioComponent},
  {path: 'campeonato/nuevo', component: CreacionCampeonatoComponent},
  {path: 'equipo/:idEquipo/jugador/nuevo', component: CreacionJugadorComponent},
  {path: 'campeonato/:idCampeonato/equipo/nuevo', component: CreacionEquipoComponent},
  

  {path: 'detalles-campeonato/:id', component: DetallesCampeonatoComponent},
  {path: 'detalles-equipo/:id', component: DetallesEquipoComponent},



  {path:'', redirectTo:'inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
