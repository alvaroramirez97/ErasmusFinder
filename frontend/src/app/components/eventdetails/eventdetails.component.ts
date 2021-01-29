import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { ActivatedRoute } from '@angular/router';
import { MapService } from 'src/app/services/map.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare var L: any;

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {

  public id: any;
  public evento: any;

  public datosevento = {
    latitud: 0,
    longitud: 0,
    pointer: L.layerGroup()
  };
  public mapa: any;

  constructor(public servicioEventos: EventosService, private router: Router,private rutaActiva: ActivatedRoute, private servicioUser: UsuariosService) { }


  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id;
    localStorage.setItem('idEvento', this.id);
    console.log("id: ", this.id);
    this.servicioEventos.verEvento(this.id).subscribe(
      res => {
        console.log(res[0]);
        res[0].fecha = this.formatDate(res[0].fecha);
        this.evento = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarEvento() {
    const idEvento = localStorage.getItem('idEvento');
    this.servicioEventos.deleteEvento(idEvento).subscribe(
      res => {
        console.log(res);
        localStorage.removeItem('idEvento');
        console.log('Evento borrado correctamente');
      },
      err => {
        console.log(err);
        this.router.navigate(['/events']);
        console.log('No se puede borrar el evento');
      }
    )
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  estuyo(dato) {
    var user_id = localStorage.getItem('id');
    if(dato == user_id){
      return true;
    }else{
      return false;
    }
  }

}
