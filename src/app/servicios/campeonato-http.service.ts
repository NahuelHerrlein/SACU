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
}
