import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var $: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public lista_eventos: any;
  public formEventos: FormGroup;


  public id: any;

  constructor(public servicioEventos: EventosService, private router: Router, private servicioUser: UsuariosService) { }

  ngOnInit() {
    this.listarTodos();
  }
  
  submit() {
    console.log(this.formEventos);
    this.servicioEventos.crearUsuario(this.formEventos.value).subscribe(
      res => {
        if (!res[0]) {// Si devuelve false

          this.router.navigate(['/events']);
        } else {  // Si devuelve algo bien
          console.log(res);
        }
      },
      err => {
        console.log(err);
        this.router.navigate(['/events']);
      }
    );
  }

  listarTodos() {
    console.log('toodo');

    this.servicioEventos.getEventos().subscribe(
      res => {
        console.log(res);
        this.lista_eventos = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  buscar() {
    const destino = $('#destino_buscado').val().toString();
    if (destino.length == 0) {
      this.listarTodos();
    } else {
      console.log(destino);
      this.servicioEventos.getEventosFiltrado(destino).subscribe(
        res => {
          console.log(res);
          this.lista_eventos = res;
          this.router.navigate(['/events']);
        },
        err => {
          console.log(err);
        }
      );
    }

  }





}
