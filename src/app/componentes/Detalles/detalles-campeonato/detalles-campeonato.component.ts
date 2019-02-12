import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampeonatoHttpService } from 'src/app/servicios/campeonato-http.service';
import { Campeonato } from 'src/app/clases/campeonato';

@Component({
  selector: 'app-detalles-campeonato',
  templateUrl: './detalles-campeonato.component.html',
  styleUrls: ['./detalles-campeonato.component.css']
})
export class DetallesCampeonatoComponent implements OnInit {

  campeonato: Campeonato;

  constructor(private ruta: ActivatedRoute,
              private dataService: CampeonatoHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (camp: Campeonato)=> {
        this.campeonato = camp;
        console.log(this.campeonato);
        
      }, error=> console.log(error));
  }

  nuevoEquipo() {
    this.router.navigate(['/campeonato/' + this.campeonato.id + '/equipo/nuevo']);
  }
  
}
