import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorHttpService } from 'src/app/servicios/jugador-http.service';

@Component({
  selector: 'app-detalles-jugador',
  templateUrl: './detalles-jugador.component.html',
  styleUrls: ['./detalles-jugador.component.css']
})
export class DetallesJugadorComponent implements OnInit {


  jugador: Jugador;
  constructor(private ruta: ActivatedRoute,
              private dataService: JugadorHttpService,
              private router: Router
              ) {}

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (jugador: Jugador)=> {
        this.jugador = jugador;        
      }, error=> console.log(error));
  }

  atras() {
    this.router.navigate(['/detalles-equipo/' + this.jugador.equipoId]);    
  }

  editar() {
    this.router.navigate(['/edicion-jugador/' + this.jugador.id]);
  }

}
