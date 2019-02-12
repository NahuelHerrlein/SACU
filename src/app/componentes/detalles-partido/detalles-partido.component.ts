import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/clases/partido';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidoHttpService } from 'src/app/servicios/partido-http.service';

@Component({
  selector: 'detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {
  nuevo: boolean = false;
  titulo: String = "";
  partido: Partido;
  constructor(private ruta: ActivatedRoute,
              private dataService: PartidoHttpService,
              private router: Router
              ) { }

  ngOnInit() {
    this.nuevo= this.ruta.snapshot.url[this.ruta.snapshot.url.length-1].toString() == 'nuevo';
    if(this.nuevo){
      this.partido = new Partido();
      this.partido.id = -1;
      this.titulo= 'Nuevo Partido';
    }else{
      this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
        (partido: Partido)=> {
          this.partido = partido;
        }, error=> console.log(error));
        this.titulo= "Editar partido";
    }
  }

  crear() {
    this.dataService.add(this.partido).subscribe(() => {
    this.router.navigate(['/inicio']);
    });
  }
}
