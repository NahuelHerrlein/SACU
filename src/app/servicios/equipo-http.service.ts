import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoHttpService extends BaseHttpService {

  constructor(http: HttpClient) {
    super('equipos', http);
   }
}
