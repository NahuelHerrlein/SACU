import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/clases/equipo';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';

@Component({
  selector: 'app-detalles-equipo',
  templateUrl: './detalles-equipo.component.html',
  styleUrls: ['./detalles-equipo.component.css']
})
export class DetallesEquipoComponent implements OnInit {

  equipo: Equipo;
  constructor(private ruta: ActivatedRoute,
              private dataService: EquipoHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (equipo: Equipo)=> {
        this.equipo = equipo;
        console.log(equipo);
        
      }, error=> console.log(error));
  }

  nuevoJugador() {
    this.router.navigate(['/equipo/' + this.equipo.id + '/jugador/nuevo']);    
  }

}
