import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { modeloEvento } from '../modelos/mimodeloEvento';
import { modeloInscripcion } from '../modelos/mimodeloInscripcion';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  public id: any;
  public modeloEventos: modeloEvento;

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/all');
  }

  verEvento(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/' + id);
  }

  getEventosFiltrado(destino: string): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/buscar/' + destino);
  }

  crearEvento(evento: modeloEvento): Observable<any> {
    return this.http.post('http://localhost:3000/eventos/crear', evento);
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/eventos/delete/' + id);
  }

  apuntarse(inscripcion: modeloInscripcion) {
    return this.http.post('http://localhost:3000/eventos/apuntarse', inscripcion);
  }

}
