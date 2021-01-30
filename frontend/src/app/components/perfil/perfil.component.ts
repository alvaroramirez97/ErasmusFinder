import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MimodeloPerfil } from 'src/app/modelos/mimodeloPerfil';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public formUsuario: FormGroup;
  public user: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private serviceuser: UsuariosService) {
    this.formUsuario = formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      idioma: ['', Validators.required],
      accessToken: [''],
      foto: ['']
    });
  }


  ngOnInit() {
    const idUser = localStorage.getItem('id');
    this.serviceuser.leerUser(idUser).subscribe(
      res => {
        if (!res[0]) {
          this.router.navigate(['/login']);
        }
        this.user = res[0];
        this.user.nombre = res[0].nombre;
        this.user.apellidos = res[0].apellidos;
        this.user.email = res[0].email;
        console.log(idUser);
        console.log(res);
        if (this.user.accessToken === localStorage.getItem('token')) {
          console.log('token correcto');
        } else {
          this.router.navigate(['/login']);
        }

      },
      err => {
        this.router.navigate(['/login']);
        console.log(err);
      }
    );
  }

  borrarUser(paco) {
    const idUser = localStorage.getItem('id');
    console.log(paco)
    this.serviceuser.deleteUsuario(idUser).subscribe(
      res => {
        console.log(res);
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        console.log('Usuario borrado correctamente');
      },
      err => {
        console.log(err);
        this.router.navigate(['/perfil']);
        console.log('No se puede borrar el usuario');
      }
    )
  }

  submit(){
    var formu = this.formUsuario.value;
    const user = this.user;    
    const objUser={
      id: parseInt(localStorage.getItem('id')),
      nombre: this.user.nombre,
      apellidos: this.user.apellidos,
      email: this.user.email
    }
    console.log(objUser);
    
    if(formu.nombre != user.nombre && formu.nombre != ""){
      console.log('nombre cambiado');
      objUser.nombre = formu.nombre;
    }
    if(formu.apellidos != user.apellidos && formu.apellidos != ""){
      console.log('apellidos cambiados');
      objUser.apellidos = formu.apellidos;
    }
    if(formu.email != user.email && formu.email != ""){
      console.log('email cambiado');
      objUser.email = formu.email;
    }
    console.log(objUser);
    
    this.serviceuser.editUsuario(objUser).subscribe(
      res => {
        if(!res[0]){
          console.log("Guardado correctamente");
          // location.reload();
        }
        else {  // Si devuelve algo bien
        console.log(res[0]);
        alert("Algo salió mal. Intentalo de nuevo.");
      }
      },
      err => {
        console.log(err);
        // this.router.navigate(['/perfil']);
      }
    )
  }

  abrirEditor(){
    //$('#editorPerfil').removeClass('oculto');
    document.getElementById("editorPerfil").classList.remove('oculto');
  }

  cerrarEditor(){
    //$('#editorPerfil').addClass('oculto');
    document.getElementById("editorPerfil").classList.add('oculto');
  }

}
