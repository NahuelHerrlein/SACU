import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../clases/equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoHttpService extends BaseHttpService {

  constructor(http: HttpClient) {
    super('equipos', http);
   }

   getEquiposCampeonato(campeonatoId: number): Observable<Equipo[]> {
    return this.http.get(this._urlBase + "/campeonato/" + campeonatoId);
  }

  setDerrota(id: number): Observable<Equipo> {
    return this.http.put(this._urlBase + "/perdedor/" + id);
  }

  setPartido(idPartido: number, idEquipo: number) {
    return this.http.put(this._urlBase + "/" + idEquipo + "/partido/" + idPartido);
  }
}
