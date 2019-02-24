import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/clases/partido';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidoHttpService } from 'src/app/servicios/partido-http.service';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';
import { Etapa } from 'src/app/clases/etapa';
import { EtapaHttpService } from 'src/app/servicios/etapa-http.service';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';

@Component({
  selector: 'app-resultado-partido',
  templateUrl: './resultado-partido.component.html',
  styleUrls: ['./resultado-partido.component.css']
})
export class ResultadoPartidoComponent implements OnInit {

  partido: Partido;
  campeonatoId: number;
  puntosEquipo1: number;
  puntosEquipo2: number;
  mensajeBody: string;
  mensajeHeader: string;
  mensajeError: string;
  constructor(private ruta: ActivatedRoute,
              private PartidoService: PartidoHttpService,
              private EquipoService: EquipoHttpService,
              private EtapaService: EtapaHttpService,
              private CampeonatoService: CampeonatoHttpService,
              private router: Router
              ) {
    this.mensajeBody = "";
    this.mensajeHeader = "";
    this.mensajeError = "";
              }

  ngOnInit() {
    this.PartidoService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (partido: Partido)=> {
        this.partido = partido;        
        this.partido.puntos = [];
        this.ordenarEquipos();      
      }, error=> console.log(error));
  }

  checkResultado() {
    if(this.puntosEquipo1 >= 0  && this.puntosEquipo2 >= 0) {
      this.mensajeError = "";
      this.partido.puntos = [this.puntosEquipo1, this.puntosEquipo2];
      if(this.puntosEquipo1 == this.puntosEquipo2) {
        this.mensajeHeader = "EMPATE";
        this.mensajeBody = "Desempate el encuentro mediante el metodo correspondiente segun la disciplina y seleccione al ganador"
      } else if(this.puntosEquipo1 > this.puntosEquipo2) {
        this.setGanador(0, 1);
      } else {
        this.setGanador(1, 0);
      }
    } else {
      this.mensajeError = "Ingrese ambos resultados";
    }

  }

  setGanador(ganador: number, perdedor: number){
    this.mensajeHeader = "VICTORIA";
    this.mensajeBody = "El ganador es " + this.partido.equipos[ganador].nombre;
    this.partido.puntos[ganador]++;
    this.EquipoService.setDerrota(this.partido.equipos[perdedor].id).subscribe(() => {
      this.PartidoService.update(this.partido).subscribe(() => {})
    });
  }

  volver() {
    this.partido.estado = "Terminado";
    this.EtapaService.getOne(this.partido.etapaId).subscribe(etapa => {
      this.campeonatoId = etapa.campeonatoId;
      if(etapa.nombre == "Final") {
        this.PartidoService.update(this.partido).subscribe(() => {
          this.CampeonatoService.finalizar(this.campeonatoId).subscribe(() => {
           this.router.navigate(['anuncio-ganador/campeonato/' + this.campeonatoId]);
          })
        })
      } else {
        this.PartidoService.update(this.partido).subscribe(() => {
          this.router.navigate(['detalles-etapa/' + this.partido.etapaId]);
        })
      }
    });
  }

   //Este método es para que el orden de los equipos dentro del array siempre sea el mismo,
  //sino puede suceder que al traer los equipos cambien de posición y por lo tanto
  //el vector que guarda los puntos no reflejaría el puntaje de cada uno, sino que estaría invertido
  ordenarEquipos() {
    this.partido.equipos.sort((a,b) => {
      return a.id - b.id;
    })
  }
}
