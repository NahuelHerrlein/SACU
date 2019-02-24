import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/clases/equipo';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';

@Component({
  selector: 'app-edicion-equipo',
  templateUrl: './edicion-equipo.component.html',
  styleUrls: ['./edicion-equipo.component.css']
})
export class EdicionEquipoComponent implements OnInit {

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

  guardar() {
    if(this.checkCampos()) {
      this.dataService.update(this.equipo).subscribe( () => {
        this.router.navigate(['/detalles-equipo/' + this.equipo.id]);
      })
    } else {
      this.mensajeError = "Debe completar todos los campos y recuerde que la cantidad de cupos no puede ser menor a la cantidad de jugadores ya inscriptos";
    }
  }

  checkCampos() {
    return this.equipo.nombre &&
           this.equipo.club &&
           this.equipo.pais &&
           this.equipo.cantJugadores &&
           this.equipo.cantJugadores >= this.equipo.jugadores.length &&
           this.equipo.cantJugadores > 0 &&
           this.equipo.cantJugadores == Math.trunc(this.equipo.cantJugadores);;
  }
  eliminar() {
    this.dataService.delete(this.equipo.id).subscribe(() => {
      this.router.navigate(['/detalles-campeonato/' + this.equipo.campeonatoId]);
    })
  }

  atras() {    
    this.router.navigate(['/detalles-equipo/' + this.equipo.id]);    
  }
}