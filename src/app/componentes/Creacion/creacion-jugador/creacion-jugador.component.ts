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
  constructor(private dataService: JugadorHttpService,
              private router: Router,
              private ruta: ActivatedRoute
              ) { }

  ngOnInit() {
    this.jugador = new Jugador();
    this.jugador.id = -1;
    this.jugador.equipoId = +this.ruta.snapshot.paramMap.get('idEquipo');
    console.log(this.jugador.equipoId);
    

    }

  crear() {
    this.dataService.add(this.jugador).subscribe(() => {
    });
  }

}
