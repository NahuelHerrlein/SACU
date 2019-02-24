import { Component, OnInit } from '@angular/core';
import { EquipoHttpService } from 'src/app/servicios/equipo-http.service';
import { Equipo } from 'src/app/clases/equipo';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';

@Component({
  selector: 'app-anuncio-ganador',
  templateUrl: './anuncio-ganador.component.html',
  styleUrls: ['./anuncio-ganador.component.css']
})
export class AnuncioGanadorComponent implements OnInit {

  equipo: Equipo;
  idCampeonato: number;
  constructor(private ruta: ActivatedRoute,
              private router: Router,
              private EquipoService: EquipoHttpService,
              private CampeonatoService: CampeonatoHttpService
              ) {}

  ngOnInit() {
    this.idCampeonato = +this.ruta.snapshot.paramMap.get('idCampeonato');
    this.EquipoService.getEquiposCampeonato(this.idCampeonato).subscribe(
      (equipos: Equipo[]) => {
        this.equipo = equipos[0];
      });
  }

  terminar() {
    this.CampeonatoService.delete(this.idCampeonato).subscribe(() => {
      this.router.navigate(['inicio']);
    })
  }

}
