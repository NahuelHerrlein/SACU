import { Component, OnInit } from '@angular/core';
import { Etapa } from 'src/app/clases/etapa';
import { ActivatedRoute, Router } from '@angular/router';
import { EtapaHttpService } from 'src/app/servicios/etapa-http.service';

@Component({
  selector: 'detalles-etapa',
  templateUrl: './detalles-etapa.component.html',
  styleUrls: ['./detalles-etapa.component.css']
})
export class DetallesEtapaComponent implements OnInit {
  nuevo: boolean = false;
  titulo: String = "";
  etapa: Etapa;
  constructor(private ruta: ActivatedRoute,
              private dataService: EtapaHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.nuevo= this.ruta.snapshot.url[this.ruta.snapshot.url.length-1].toString() == 'nuevo';
    if(this.nuevo){
      this.etapa = new Etapa();
      this.etapa.id = -1;
      this.titulo= 'Nueva Etapa';
    }else{
      this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
        (etapa: Etapa)=> {
          this.etapa = etapa;
        }, error=> console.log(error));
        this.titulo= "Editar Etapa";
    }
  }

  crear() {
    this.dataService.add(this.etapa).subscribe(() => {
    this.router.navigate(['/inicio']);
    });
  }
}
