import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/all');
  }

  verEvento(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/' + id);
  }

}
