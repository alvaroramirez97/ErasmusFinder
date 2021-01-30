import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MimodeloRegistro } from '../modelos/mimodeloRegistro';
import { Mimodelo } from '../modelos/mimodelo';
import { MimodeloToken } from '../modelos/mimodeloToken';
import { modeloUbi } from '../modelos/mimodeloUbi';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: MimodeloRegistro): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/crear', usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete('http://localhost:3000/usuarios/' + id);
  }

  editUsuario(usuario: Mimodelo): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/editar', usuario);
  }

  updateToken(usuario: Mimodelo): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/token', usuario);
  }

  updateUbi(datos: modeloUbi): Observable<any> {
    return this.http.put('http://localhost:3000/usuarios/ubi', datos);
  }

  getLogin(usuario: Mimodelo): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }

  leerUser(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/' + id);
  }

  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/');
  }

  existeEmail(email: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/exist/' + email);
  }

  logIn() {
    return !!localStorage.getItem('id');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}

