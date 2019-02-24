import { Component, OnInit } from '@angular/core';
import { Partido } from 'src/app/clases/partido';
import { ActivatedRoute, Router } from '@angular/router';
import { PartidoHttpService } from 'src/app/servicios/partido-http.service';

@Component({
  selector: 'app-detalles-partido',
  templateUrl: './detalles-partido.component.html',
  styleUrls: ['./detalles-partido.component.css']
})
export class DetallesPartidoComponent implements OnInit {

  partido: Partido;
  mensajeError: string;
  mensajeOk: string;
  finalizo: boolean;
  constructor(private ruta: ActivatedRoute,
              private dataService: PartidoHttpService,
              private router: Router
              ) {
    this.mensajeError = "";
    this.mensajeOk = "";
              }

  ngOnInit() {
    this.dataService.getOne(+this.ruta.snapshot.paramMap.get('id')).subscribe(
      (partido: Partido)=> {
        this.partido = partido;        
      }, error=> console.log(error));
  }

  guardar() {
    if(this.checkCampos()) {
      this.dataService.update(this.partido).subscribe( () => {
        this.mensajeError = "";
        this.mensajeOk = "Guardado con exito"
      })
    } else {
      this.mensajeOk = "";
      this.mensajeError = "Se deben definir la fecha y hora del partido"
    }
  }
  atras() {
    this.router.navigate(['/detalles-etapa/' + this.partido.etapaId]);    
  }

  setResultados() { 
    if(this.checkCampos()) {
      this.dataService.update(this.partido).subscribe(() => {
      this.router.navigate(['/resultado-partido/' + this.partido.id]);    
      });
    } else {
      this.mensajeOk = "";
      this.mensajeError = "El lugar y la fecha deben estar definidos"
    }

  }

  checkCampos() {
    return this.partido.fecha &&
           this.partido.lugar;
  }
}
