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
  constructor(private ruta: ActivatedRoute,
              private dataService: EquipoHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.equipo = new Equipo();
    this.equipo.id = -1;
    this.equipo.campeonatoId = +this.ruta.snapshot.paramMap.get('idCampeonato')
    }

  crear() {
    this.dataService.add(this.equipo).subscribe((equipo) => {
    this.router.navigate(['/detalles-equipo/' + equipo.id]);
    });
  }

}
