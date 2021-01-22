import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MimodeloRegistro } from 'src/app/modelos/mimodeloRegistro';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';


declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;
  public misusuarios: MimodeloRegistro;

  public paises = [];

  constructor(private formBuilder: FormBuilder, private mimodelo: UsuariosService, private router: Router,
    private servicioPaises: MapService) {
    this.formRegister = formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      idioma: ['', Validators.required],
      id_pais: [''],
      foto: ['']
    });
  }

  ngOnInit() {
    this.cargarPaises();
    
  }

  submit() {
    this.formRegister.value.id_pais = $('#id_autocomplete').val();
    console.log(this.formRegister);
    this.mimodelo.crearUsuario(this.formRegister.value).subscribe(
      res => {
        if (!res[0]) {

          this.router.navigate(['/register']);
        } else {
          console.log(res);

          localStorage.setItem('token', res[1]);
          localStorage.setItem('id', res[0]);
          this.router.navigate(['/perfil']);
        }
      },
      err => {
        console.log(err);
        this.router.navigate(['/register']);
      }
    );
  }

  cargarPaises() {
    this.servicioPaises.verPaises().subscribe(
      res => {
        res.forEach(pais => {
          const objeto = {
            label: pais.nombre,
            id: pais.id_pais
          };
          this.paises.push(objeto);
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  autocompletar(lista: Array<any>) { // AUTOCOMPLETAR CAMPO DE IDIOMAS

    $('#pais_autocomplete').autocomplete({
      source: lista,
      minLength: 2,
      classes: {
        'ui-autocomplete': 'lista_autocomplete',
        'ui-menu-item': 'elemento_autocomplete'
      },
      focus(event, ui) {
        event.preventDefault();
        $('#id_autocomplete').val(ui.item.id);
        $('#pais_autocomplete').val(ui.item.label);
      },
      select(event, ui) {
        event.preventDefault();
        $('#id_autocomplete').val(ui.item.id);
        $('#pais_autocomplete').val(ui.item.label);
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

  get idioma() {
    return this.formRegister.get('idioma')
  }
}
