import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  _urlBase = 'http://localhost:3001/api/';
  http: any;
  constructor(endpoint: string,
              http: any) { 
    this._urlBase = this._urlBase + endpoint;
    this.http = http;
              }
  
  
  getOne(id: number): Observable<any> {
    return this.http.get(this._urlBase + '/' + id);
  }

  getList(): Observable<any[]> {
    return this.http.get(this._urlBase);
  }

  add = (data: any) => { 
    return this.http.post(this._urlBase + "/nuevo", data);
  }

  update(data: any) {
    return this.http.put(this._urlBase + "/" + data.id, data);
  }

  //Los datos no se borran de la base de datos, sino que se hace un softdelete
  delete(id: number) {
    return this.http.put(this._urlBase + "/borrar/" + id)
  }
}
