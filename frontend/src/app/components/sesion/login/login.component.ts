import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mimodelo } from 'src/app/modelos/mimodelo';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public users: Mimodelo;

  constructor(private router: Router, private formBuilder: FormBuilder, private modelo: UsuariosService) { 
    this.formLogin = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.modelo.getLogin(this.formLogin.value).subscribe(
      res => {
        console.log(res);
        if (!res[0]) {
          this.router.navigate(['/login']);
        } else {
          localStorage.setItem('token', res[0]);
          localStorage.setItem('id', res[1].id);
          this.router.navigate(['/perfil']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
