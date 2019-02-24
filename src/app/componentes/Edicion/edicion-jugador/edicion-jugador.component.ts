import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/clases/jugador';
import { JugadorHttpService } from 'src/app/servicios/jugador-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicion-jugador',
  templateUrl: './edicion-jugador.component.html',
  styleUrls: ['./edicion-jugador.component.css']
})
export class EdicionJugadorComponent implements OnInit {
 
  jugador: Jugador;
  mensajeError: string;
  constructor(private ruta: ActivatedRoute,
              private dataService: JugadorHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
               }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (jugador: Jugador)=> {
        this.jugador = jugador;
      }, error=> console.log(error));
  }

  eliminar() {
    this.dataService.delete(this.jugador.id).subscribe(() => {
      this.router.navigate(['/detalles-equipo/' + this.jugador.equipoId]);
    })
  }

  atras() {    
    this.router.navigate(['/detalles-equipo/' + this.jugador.equipoId]);    
  }

  guardar() {
    if(this.checkCampos()) {
      this.dataService.update(this.jugador).subscribe(() => {
        this.router.navigate(['/detalles-equipo/' + this.jugador.equipoId]);    
        }, error => console.log(error));
    } else {
      this.mensajeError = "Debe completar todos los campos";
    }
  }

  checkCampos() {
    return this.jugador.nombre &&
           this.jugador.posicion;
  }
}
