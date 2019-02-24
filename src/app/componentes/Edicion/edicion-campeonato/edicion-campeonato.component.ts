import { Component, OnInit } from '@angular/core';
import { Campeonato } from 'src/app/clases/campeonato';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';

@Component({
  selector: 'app-edicion-campeonato',
  templateUrl: './edicion-campeonato.component.html',
  styleUrls: ['./edicion-campeonato.component.css']
})
export class EdicionCampeonatoComponent implements OnInit {

  campeonato: Campeonato;
  mensajeError: string;

  constructor(private ruta: ActivatedRoute,
              private dataService: CampeonatoHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
              }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (camp: Campeonato)=> {
        this.campeonato = camp;        
      }, error=> console.log(error));
  }

  guardar() {
    if(this.campeonato.cantParticipantes >= this.campeonato.equipos.length) {
      this.dataService.update(this.campeonato).subscribe( () => {
        this.router.navigate(['/detalles-campeonato/' + this.campeonato.id]);
      })
    } else {
      this.mensajeError = "La cantidad de participantes no puede ser menor a la cantidad de equipos ya inscriptos"
    }
  }

  eliminar() {
    this.dataService.delete(this.campeonato.id).subscribe(() => {
      this.router.navigate(['/inicio']);
    })
  }

  atras() {    
    this.router.navigate(['/detalles-campeonato/' + this.campeonato.id]);    
  }
}
