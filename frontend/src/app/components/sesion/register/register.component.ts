import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MimodeloRegistro } from 'src/app/modelos/mimodeloRegistro';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;
  public misusuarios: MimodeloRegistro;

  constructor(private formBuilder: FormBuilder, private mimodelo: UsuariosService, private router: Router) {
    this.formRegister = formBuilder.group({
      nombre: [''],
      apellidos: [''],
      email: [''],
      password: [''],
      id_pais: [''],
      foto: ['']
    });
  }

  ngOnInit() {
  }

  submit() {
    this.mimodelo.crearUsuario(this.formRegister.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/register']);
      }
    );
  }

  autocompletar(lista: Array<any>, coor: any) { // AUTOCOMPLETAR CAMPO DE IDIOMAS
    console.log('FUNCION-> autocompletar()');

    $('#pais_buscado').autocomplete({
      source: lista,
      minLength: 2,
      classes: {
        'ui-autocomplete': 'lista_autocomplete',
        'ui-menu-item': 'elemento_autocomplete'
      },
      focus(event, ui) {
         event.preventDefault();
         $('#lati_buscada').val(ui.item.coord[0]);
         $('#long_buscada').val(ui.item.coord[1]);
         $('#pais_buscado').val(ui.item.label);
         coor.lati = ui.item.coord[0];
         coor.longi = ui.item.coord[1];
     },
     select(event, ui) {
         event.preventDefault();
         $('#lati_buscada').val(ui.item.coord[0]);
         $('#long_buscada').val(ui.item.coord[1]);
         $('#pais_buscado').val(ui.item.label);
         coor.lati = ui.item.coord[0];
         coor.longi = ui.item.coord[1];
      }
    });
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

  get foto() {
    return this.formRegister.get('foto');
  }


}
