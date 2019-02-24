import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';
import { Campeonato } from 'src/app/clases/campeonato';
import { Equipo } from 'src/app/clases/equipo';

@Component({
  selector: 'app-detalles-campeonato',
  templateUrl: './detalles-campeonato.component.html',
  styleUrls: ['./detalles-campeonato.component.css']
})
export class DetallesCampeonatoComponent implements OnInit {

  campeonato: Campeonato;
  mensajeError: string;

  constructor(private ruta: ActivatedRoute,
              private dataService: CampeonatoHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
               }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (camp: Campeonato)=> {
        this.campeonato = camp;
      }, error=> console.log(error));
  }

  editar() {
    this.router.navigate(['/edicion-campeonato/' + this.campeonato.id]);
  }

  nuevoEquipo() {
    if(this.campeonato.cantParticipantes > this.campeonato.equipos.length) {
      this.router.navigate(['/campeonato/' + this.campeonato.id + '/equipo/nuevo']);
    } else {
      this.mensajeError = "Cupos completos";
    }
  }

  verDetallesEquipo(id: number) {
    this.router.navigate(['/detalles-equipo/' + id]);    
  }

  comenzar() {
    if(this.campeonato.equipos.length == this.campeonato.cantParticipantes) {
      const cuposLibres = this.checkJugadores();
      if(cuposLibres.length == 0) {
        this.dataService.comenzar(this.campeonato).subscribe(campeonato => {        
          this.router.navigate(['detalles-etapa/' + campeonato[1][0].etapaActualId]);
        });
      } else {
        this.mensajeError = "A los siguientes equipos les falta completar su cupo de jugadores:";
        cuposLibres.forEach(equipo => {
          this.mensajeError += " - " + equipo ;
        });
      }
    } else {
      this.mensajeError = "Aun no se completaron los cupos";
    }
  }

  atras() {
    this.router.navigate(['/inicio']);    
  }

  checkJugadores() {
    let ret = [];
    this.campeonato.equipos.forEach( equipo => {
      if(equipo.cantJugadores > equipo.jugadores.length) {
        ret.push(equipo.nombre);
      }
    });    
    return ret;
  }
  
}
