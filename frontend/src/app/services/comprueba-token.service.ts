import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class CompruebaTokenService implements HttpInterceptor {

  constructor(private mimodelo: UsuariosService) { }

  intercept(req: any, next: any) {
    const tokenI = req.clone({
      setHeaders: {
        Authorization: 'miaplicacion' + this.mimodelo.getToken()
      }
    });
    return next.handle(tokenI);
  }
}
