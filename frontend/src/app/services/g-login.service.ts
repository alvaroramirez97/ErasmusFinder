import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})

export class GLoginUserGuard implements CanActivate {
  constructor(private mimodelo: UsuariosService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.mimodelo.logIn()) {
      return true;
    }
    this.router.navigate(['home']);
    return false;
  }
}
