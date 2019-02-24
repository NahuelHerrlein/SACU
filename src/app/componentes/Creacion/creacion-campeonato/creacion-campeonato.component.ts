import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/clases/campeonato';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';
import { resolveReflectiveProviders } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-creacion-campeonato',
  templateUrl: './creacion-campeonato.component.html',
  styleUrls: ['./creacion-campeonato.component.css']
})
export class CreacionCampeonatoComponent implements OnInit {

  nuevo: boolean = false;
  campeonato: Campeonato;
  mensajeError: string;

  constructor(private ruta: ActivatedRoute,
              private dataService: CampeonatoHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
              }

  ngOnInit() {
      this.campeonato = new Campeonato();
      this.campeonato.id = -1;
  }

  crear() {
    if(this.checkCampos()) {
      this.dataService.add(this.campeonato).subscribe((campeonato) => {
      this.router.navigate(['/detalles-campeonato/' + campeonato.id]);
      });
    } else {
      this.mensajeError = "Por favor complete todos los campos";
    }

  }

  checkCampos() {    
    return this.campeonato.nombre && this.campeonato.cantParticipantes && this.campeonato.disciplina;
  }

  atras() {
    this.router.navigate(['/inicio']);    
  }

}