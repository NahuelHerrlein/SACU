import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtapaHttpService extends BaseHttpService {

  constructor(http: HttpClient) { 
    super('etapa', http);
  }
}
