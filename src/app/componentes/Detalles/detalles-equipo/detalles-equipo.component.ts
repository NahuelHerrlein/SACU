import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/clases/equipo';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';

@Component({
  selector: 'app-detalles-equipo',
  templateUrl: './detalles-equipo.component.html',
  styleUrls: ['./detalles-equipo.component.css']
})
export class DetallesEquipoComponent implements OnInit {

  equipo: Equipo;
  mensajeError: string;
  constructor(private ruta: ActivatedRoute,
              private dataService: EquipoHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
  }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (equipo: Equipo)=> {
        this.equipo = equipo;
      }, error=> console.log(error));
  }

  nuevoJugador() {
    if(this.equipo.cantJugadores > this.equipo.jugadores.length) {
      this.router.navigate(['/equipo/' + this.equipo.id + '/jugador/nuevo']);    
    } else {
      this.mensajeError = "Cupos completos";
    }
  }

  verDetallesJugador(id: number) {
    this.router.navigate(['/detalles-jugador/' + id]);    
  }

  editar() {
    this.router.navigate(['/edicion-equipo/' + this.equipo.id]);
  }

  atras() {    
    this.router.navigate(['/detalles-campeonato/' + this.equipo.campeonatoId]);    
  }
}
