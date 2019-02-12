import { Component, OnInit } from '@angular/core';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';
import { Campeonato } from 'src/app/clases/campeonato';
import { Router } from '@angular/router';

@Component({
  selector: 'pantalla-inicio',
  templateUrl: './pantalla-inicio.component.html',
  styleUrls: ['./pantalla-inicio.component.css']
})
export class PantallaInicioComponent implements OnInit {
  campeonatos: Campeonato[];
  hayActivos: boolean;

  constructor(private campeonatoService: CampeonatoHttpService,
              private router: Router          
             ) { }

  ngOnInit() {
    this.campeonatoService.hayCampeonatosActivo().subscribe(camp => {
      this.campeonatos = camp;
      if(this.campeonatos.length == 0) {
        this.hayActivos = false;
      } else {
        this.hayActivos = true;
      }
    });
  }

  mostrarInfo(id: number) {
    this.router.navigate(['/detalles-campeonato/' + id]);
  }

}
