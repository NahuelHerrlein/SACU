import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/clases/etapa';
import { ActivatedRoute, Router } from '@angular/router';
import { EtapaHttpService } from 'src/app/servicios/etapa-http.service';
import { Partido } from 'src/app/clases/partido';
import { Equipo } from 'src/app/clases/equipo';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';
import { PartidoHttpService } from 'src/app/servicios/partido-http.service';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';

@Component({
  selector: 'app-detalles-etapa',
  templateUrl: './detalles-etapa.component.html',
  styleUrls: ['./detalles-etapa.component.css']
})
export class DetallesEtapaComponent implements OnInit {

  etapa: Etapa;
  equipos: Equipo[];
  etapasNombre = ['Final',
                  'Semifinal',
                  'Cuartos de Final',
                  'Octavos de Final',
                  'Rueda de 16',
                  'Rueda de 32',
                  'Rueda de 64',
                  'Rueda de 128',
                  'Rueda de 256'
                ];
  mensajeError: string;
  mensajeok: string;
  
  constructor(private ruta: ActivatedRoute,
              private CampeonatoService: CampeonatoHttpService,
              private EtapaService: EtapaHttpService,
              private EquipoService: EquipoHttpService,
              private PartidoService: PartidoHttpService,
              private router: Router
    ) {
      this.mensajeError = "";
      this.mensajeok = "";
    }

  async ngOnInit() {    
    await this.EtapaService.getOne(+this.ruta.snapshot.paramMap.get('idEtapa')).subscribe(
      (etapa: Etapa)=> {        
        this.etapa = etapa;
            
        //Controlo si la etapa no está iniciada
        if(etapa.partidos.length <= 0) {
          this.etapa.partidos = [];       
          this.EquipoService.getEquiposCampeonato(this.etapa.campeonatoId).subscribe(
            (equipos: Equipo[]) => {
              this.equipos = equipos;
              this.sortearPartidos();
            }
          )
        } else {
         this.ordenarPartidos();
        }
        if(!this.termino() && this.etapa.etapaSiguiente) {          
            this.mensajeok = "Ya se jugaron todos los partidos. Puede continuar en la siguiente etapa"
        }

        this.etapa.partidos.forEach(partido => {
          this.ordenarEquipos(partido);
        })
      }, error=> console.log(error));

  }

  ordenarPartidos() {
    this.etapa.partidos.sort((a, b) => {      
      return a.nroPartido -b.nroPartido;
    })
  }

  //Este método es para que el orden de los equipos dentro del array siempre sea el mismo,
  //sino puede suceder que al traer los equipos cambien de posición y por lo tanto
  //el vector que guarda los puntos no reflejaría el puntaje de cada uno, sino que estaría invertido
  ordenarEquipos(partido: Partido) {
    partido.equipos.sort((a,b) => {
      return a.id - b.id;
    })
  }

  //Para el sorteo de los partidos utilizo el algoritmo de Fisher-Yates 
  async sortearPartidos() {
    var currentIndex = this.equipos.length, temporaryValue, randomIndex;
  
    // Mientras aun queden elementos para mezclar
    while (0 !== currentIndex) {
      // Tomo un elemento de los que quedan
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.equipos[currentIndex];
      this.equipos[currentIndex] = this.equipos[randomIndex];
      this.equipos[randomIndex] = temporaryValue;
    }    
    
    let indicePartido = 0;
    //Esta bandera se utiliza para setear el orden de los partidos
    let bandera = true;
    for (let i = 0; i < this.equipos.length; i += 2) {
      let partido = new Partido();
      let index = i;
      partido.id = -1;
      partido.etapaId = this.etapa.id;
      partido.equipos = [this.equipos[index], this.equipos[++index]];
      indicePartido++;      
      partido.nroPartido = indicePartido;      
      if(bandera) {
      partido.orden = ++indicePartido;
      bandera = false;
      --indicePartido;
      } else {
        partido.orden = --indicePartido;
        bandera = true;
        ++indicePartido;
      }
      await this.PartidoService.add(partido).subscribe((partido) => {
        this.etapa.partidos.push(partido);        
        this.fijarPartido(index, partido.id);
        this.fijarPartido(--index, partido.id);
      });
    }
  }

  fijarPartido(index: number, idPartido: number) {
    this.EquipoService.setPartido(idPartido, this.equipos[index].id).subscribe(() => {});
  }

  detallesPartido(partido: Partido) {    
    if (partido.estado != "Terminado") {
      this.router.navigate(['/detalles-partido/' + partido.id]);    
    } else {
      this.mensajeError = "El partido " + partido.nroPartido + " ya fue jugado. El ganador fue " + this.getGanador(partido);
    }
  }

  getGanador(partido: Partido) {
    console.log(partido)
    let ret: string;
    if(partido.puntos[0] > partido.puntos[1]) {
      ret = partido.equipos[0].nombre;
    } else {
      ret = partido.equipos[1].nombre;
    }
    return ret;
  }

  siguienteEtapa() {    
    if(!this.termino()) {       
      //Este fragmento de codigo está porque Angular no recarga la el componente si la URL es la misma con distintos parametros
      //La mejor manera de solucionar esto sería implementar RouteReuseStrategy
      if(this.ruta.snapshot.url[this.ruta.snapshot.url.length-2].path != "detalles-etapa") {
        this.CampeonatoService.avanzarEtapa(this.etapa.etapaSiguiente,this.etapa.campeonatoId).subscribe(() =>{
            this.router.navigate(['detalles-etapa/' + this.etapa.etapaSiguiente]);
          });
      } else {
        this.CampeonatoService.avanzarEtapa(this.etapa.etapaSiguiente,this.etapa.campeonatoId).subscribe(() =>{
            this.router.navigate(['detalle-etapa/' + this.etapa.etapaSiguiente]);
          });
      }

    } else {
      this.mensajeok = "";
      this.mensajeError = "Hay partidos que no se jugaron aun"
    }
  }

  termino() {
    return this.etapa.partidos.find((partido) => {
      return partido.estado != "Terminado";
    })
  }

}
