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

  constructor(private campeonatoService: CampeonatoHttpService,
              private router: Router          
             ) { }

  ngOnInit() {
    this.campeonatoService.hayCampeonatosActivo().subscribe(camp => {
      this.campeonatos = camp;
    });
  }

  mostrarInfo(id: number) {
    const camp = this.campeonatos.filter(function (camp) {
      return camp.id == id;
    })
    //Controlamos si el campeonato no está comenzado
    if(camp[0].etapaActualId == null) {
      this.router.navigate(['/detalles-campeonato/' + id]);
    } else {
    //Si lo está nos dirijimos a la pantalla de la etapa correspondiente
    this.router.navigate(['detalles-etapa/' + camp[0].etapaActualId]);
    }
  }



}
