import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Mimodelo } from 'src/app/modelos/mimodelo';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public user: Mimodelo;

  constructor(private router: Router, private formBuilder: FormBuilder, private serviceuser: UsuariosService) {

  }


  ngOnInit() {
    const idUser = localStorage.getItem('id');
    this.serviceuser.leerUser(idUser).subscribe(
      res => {
        this.user = res[0];
        console.log(idUser);
        console.log(res);
        if (this.user.accessToken === localStorage.getItem('token')) {
          console.log('token correcto');
        } else {
          this.router.navigate(['/login']);
        }

      },
      err => {
        console.log(err);
      }
    );
  }

}
