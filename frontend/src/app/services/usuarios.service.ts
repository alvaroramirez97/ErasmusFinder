import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MimodeloRegistro } from '../modelos/mimodeloRegistro';
import { Mimodelo } from '../modelos/mimodelo';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  crearUsuario(usuario: MimodeloRegistro): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios/crear', usuario);
  }

  getLogin(usuario: Mimodelo): Observable<any> {
    return this.http.post('http://localhost:3000/usuarios/login', usuario);
  }

  leerUser(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios/' + id);
  }


  logIn() {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}

