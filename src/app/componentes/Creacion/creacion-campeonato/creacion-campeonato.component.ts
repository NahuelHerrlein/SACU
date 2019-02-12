import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/clases/campeonato';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';

@Component({
  selector: 'app-creacion-campeonato',
  templateUrl: './creacion-campeonato.component.html',
  styleUrls: ['./creacion-campeonato.component.css']
})
export class CreacionCampeonatoComponent implements OnInit {

  nuevo: boolean = false;
  campeonato: Campeonato;

  constructor(private ruta: ActivatedRoute,
              private dataService: CampeonatoHttpService,
              private router: Router
              ) { }

  ngOnInit() {
      this.campeonato = new Campeonato();
      this.campeonato.id = -1;
  }

  crear() {
    this.dataService.add(this.campeonato).subscribe((campeonato) => {
    this.router.navigate(['/detalles-campeonato/' + campeonato.id]);
    });
  }

}
