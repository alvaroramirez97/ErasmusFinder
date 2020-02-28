import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public id: any;

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/all');
  }

  verEvento(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/' + id);
  }

}
