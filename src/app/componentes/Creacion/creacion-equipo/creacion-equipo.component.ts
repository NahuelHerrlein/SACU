import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/clases/equipo';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';

@Component({
  selector: 'creacion-equipo',
  templateUrl: './creacion-equipo.component.html',
  styleUrls: ['./creacion-equipo.component.css']
})
export class CreacionEquipoComponent implements OnInit {

  equipo: Equipo;
  mensajeError: string;
  constructor(private ruta: ActivatedRoute,
              private dataService: EquipoHttpService,
              private router: Router
              ) {
                this.mensajeError = "";
              }

  ngOnInit() {
    this.equipo = new Equipo();
    this.equipo.id = -1;
    this.equipo.campeonatoId = +this.ruta.snapshot.paramMap.get('idCampeonato')
    }

  crear() {    
    if(this.checkDatos()) {
      this.dataService.add(this.equipo).subscribe((equipo) => {
        this.router.navigate(['/detalles-equipo/' + equipo.id]);
      });
    } else {
      this.mensajeError = "Se deben completar todos los campos y la cantidad de jugadores debe ser un numero entero mayor a cero"
    }

  }

  atras() {
    this.router.navigate(['/detalles-campeonato/' + this.equipo.campeonatoId]);    
  }

  checkDatos() {
    return this.equipo.nombre &&
           this.equipo.club &&
           this.equipo.pais &&
           this.equipo.responsable &&
           this.equipo.cantJugadores &&
           this.equipo.cantJugadores > 0 &&
           this.equipo.cantJugadores == Math.trunc(this.equipo.cantJugadores);
  }


}
