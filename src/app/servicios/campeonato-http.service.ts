import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campeonato } from '../clases/campeonato';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoHttpService extends BaseHttpService {

  constructor(http: HttpClient) { 
    super('campeonatos', http);
  }

  hayCampeonatosActivo():Observable<Campeonato[]> {
    return this.http.get(this._urlBase + "/activos");
  }

  comenzar(camp: any): Observable<Campeonato> {
    return this.http.post(this._urlBase + '/comenzar', camp);
  }

  finalizar(idCampeonato: number): Observable<Campeonato> {
    return this.http.put(this._urlBase + '/finalizar/' + idCampeonato);
  }

  avanzarEtapa(idEtapa: number, idCampeonato: number): Observable<Campeonato> {    
    return this.http.post(this._urlBase + '/' + idCampeonato + '/avanzarEtapa/' + idEtapa);
  }
}
