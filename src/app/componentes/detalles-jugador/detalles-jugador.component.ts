import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorHttpService } from 'src/app/servicios/jugador-http.service';

@Component({
  selector: 'detalles-jugador',
  templateUrl: './detalles-jugador.component.html',
  styleUrls: ['./detalles-jugador.component.css']
})
export class DetallesJugadorComponent implements OnInit {
  nuevo: boolean = false;
  titulo: String = "";
  jugador: Jugador;
  equipoId: number;
  constructor(private ruta: ActivatedRoute,
              private dataService: JugadorHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.equipoId = +this.ruta.snapshot.paramMap.get('idEquipo');
    console.log(this.equipoId)
    this.nuevo= this.ruta.snapshot.url[this.ruta.snapshot.url.length-1].toString() == 'nuevo';
    if(this.nuevo){
      this.jugador = new Jugador();
      this.jugador.id = -1;
      this.jugador.equipoId = this.equipoId;
      this.titulo= 'Nuevo Jugador';
    }else{
      this.dataService.getOne(+this.ruta.snapshot.paramMap.get('idJugador')).subscribe(
        (jug: Jugador)=> {
          this.jugador = jug;
        }, error=> console.log(error));
        this.titulo= "Editar Jugador";
    }
  }

  crear() {
    this.dataService.add(this.jugador).subscribe(() => {
    this.router.navigate(['/inicio']);
    });
  }
}
