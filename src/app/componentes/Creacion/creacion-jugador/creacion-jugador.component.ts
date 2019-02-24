import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JugadorHttpService } from 'src/app/servicios/jugador-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'creacion-jugador',
  templateUrl: './creacion-jugador.component.html',
  styleUrls: ['./creacion-jugador.component.css']
})
export class CreacionJugadorComponent implements OnInit {

  jugador: Jugador;
  mensajeError: string;
  constructor(private dataService: JugadorHttpService,
              private router: Router,
              private ruta: ActivatedRoute
              ) {
    this.mensajeError = "";
               }

  ngOnInit() {
    this.jugador = new Jugador();
    this.jugador.id = -1;
    this.jugador.equipoId = +this.ruta.snapshot.paramMap.get('idEquipo');    
    }

  crear() {
    if(this.checkCampos()) {
      this.dataService.add(this.jugador).subscribe((jugador) => {
        this.router.navigate(['/detalles-equipo/' + jugador.equipoId]);
      });
    } else {
      this.mensajeError = "Debe completar todos los campos"
    }
  }

  checkCampos() {
    return this.jugador.nombre &&
           this.jugador.posicion;
  }

  atras() {    
    this.router.navigate(['/detalles-equipo/' + this.jugador.equipoId]);    
  }

}
