import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';
import { Partido } from '../clases/partido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartidoHttpService extends BaseHttpService {

  constructor(http: HttpClient) { 
    super('partido', http);
  }

}
