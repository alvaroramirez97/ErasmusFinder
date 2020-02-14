import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MimodeloRegistro } from 'src/app/modelos/mimodeloRegistro';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;
  public misusuarios: MimodeloRegistro;

  constructor(private formBuilder: FormBuilder, private mimodelo: UsuariosService) {
    this.formRegister = formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      username: [''],
      password: [''],
      id_pais: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.mimodelo.crearUsuario(this.formRegister.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  get nombre() {
    return this.formRegister.get('nombre');
  }

  get apellidos() {
    return this.formRegister.get('apellidos');
  }

  get email() {
    return this.formRegister.get('email');
  }

  get username() {
    return this.formRegister.get('username');
  }

  get password() {
    return this.formRegister.get('password');
  }

  get id_pais() {
    return this.formRegister.get('id_pais');
  }


}
